import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardModel, ToneModel} from "@shared/models";
import {ToneService} from "@shared/services/tone/tone.service";
import {TagModel} from "@shared/models/tag.model";
import {DashboardActions} from "../../../modules/dashboard/state/dashboard/actions";
import {select, Store} from "@ngrx/store";
import {getFavorites} from "../../../modules/dashboard/state/dashboard/selectors";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() tags: TagModel[];
  @Input() tone: ToneModel;
  @Input() favorites: CardModel[];
  @Input() showFavorite: boolean = false;
  @Input() canSaveRecent: boolean = false;

  public isFavorite: boolean = false;
  public card: CardModel;

  constructor(private toneService: ToneService,
              private store$: Store) {}

  public ngOnInit(): void {
    this.card = {
      title: this.title,
      description: this.description,
      tone: this.tone,
    }

    this.favorites.map(favorite => {
      if (favorite.title === this.card.title) {
        this.isFavorite = true;
      }
    });
  }

  play(event: any): void {
    event.stopPropagation();
    if (this.canSaveRecent) {
      this.store$.dispatch(DashboardActions.addMostRecent({ payload: this.card }));
    }

    if (this.tone) {
      this.toneService.play(this.tone);
    }
  }

  stop(event: any): void {
    event.stopPropagation();
    this.toneService.stop();
  }

  public isPlaying(): boolean {
    return this.toneService.isPlaying(this.tone);
  }

  public onFavoriteClick(): void {
    this.isFavorite = true;
    this.store$.dispatch(DashboardActions.addFavorite({ payload: this.card }));
  }

  public onUnfavoriteClick(): void {
    this.isFavorite = false;
    this.store$.dispatch(DashboardActions.removeFavorite({ payload: this.card }));
  }
}
