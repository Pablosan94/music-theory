import {Injectable} from '@angular/core';
import * as Tone from 'tone'
import {ToneModel} from "@shared/models";
import {ToneTypesEnum} from "@shared/enums";
import {CasioKeyboard} from "@shared/services/tone/samplers";
import {EIGHTH_NOTE} from "@shared/constants";

@Injectable({
  providedIn: 'root'
})
export class ToneService {
  public sampler: Tone.Sampler;
  public playing: boolean = false;
  public loadedTone: ToneModel;

  private chordTimeout: any;
  private scaleTimeout: any;

  constructor() {
    this.sampler = new Tone.Sampler(CasioKeyboard).toDestination();
  }

  public play(tone: ToneModel): void {
    if (!this.playing) {
      this.playing = true;
      this.loadedTone = tone;
      if (tone.type === ToneTypesEnum.CHORD) {
        this.chord();
      } else if (tone.type === ToneTypesEnum.SCALE) {
        this.scale();
      }
    } else {
      this.stop();
      this.play(tone);
    }
  }

  public stop(): void {
    // clearTimeout prevents some weird scenarios if the user manually stops in the middle of playing a sample.
    clearTimeout(this.scaleTimeout);
    clearTimeout(this.chordTimeout);

    if (this.playing) {
      this.playing = false;
      this.loadedTone = undefined;
      this.sampler.releaseAll();
    }
  }

  public isPlaying(tone: ToneModel): boolean {
    return this.playing && Object.is(tone, this.loadedTone);
  }

  private chord(): void {
    this.sampler.triggerAttackRelease(this.loadedTone.notes,'2n');
    this.chordTimeout = setTimeout(this.stop.bind(this), this.calculateTimeoutChord());
  }

  private scale(): void {
    let now = Tone.now();

    this.loadedTone.notes.forEach(note => {
      this.sampler.triggerAttack(note, now);
      this.sampler.triggerRelease(now + EIGHTH_NOTE);
      now += 0.25
    });

    this.scaleTimeout = setTimeout(this.stop.bind(this), this.calculateTimeoutScale());
  }

  private calculateTimeoutChord = (): number => (Tone.Transport.bpm.value / 60) * 0.5 * 1000;
  private calculateTimeoutScale = (): number => this.loadedTone.notes.length * (Tone.Transport.bpm.value / 60) * EIGHTH_NOTE * 1000;
}
