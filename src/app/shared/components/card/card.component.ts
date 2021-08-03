import {Component, Input} from '@angular/core';
import {ToneModel} from "@shared/models";
import {ToneService} from "@shared/services/tone/tone.service";
import {TagModel} from "@shared/models/tag.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() tags: TagModel[];
  @Input() tone: ToneModel;

  constructor(private toneService: ToneService) {}

  play(): void {
    if (this.tone) {
      this.toneService.play(this.tone);
    }
  }

  stop(): void {
    this.toneService.stop();
  }

  /*playScale(): void {
    if (this.tones && !this.isPlaying) {
      let now = Tone.now();
      const noteList = this.tones.split(',');
      this.isPlaying = true;

      noteList.forEach(note => {
        this.sampler.triggerAttack(note, now);
        this.sampler.triggerRelease(now + 0.1);
        now += 0.2
      });
    }
  }

  stop(): void {
    this.sampler.triggerRelease(Tone.now());
    this.toggle();
  }*/

  public isPlaying(): boolean {
    return this.toneService.isPlaying(this.tone);
  }
}
