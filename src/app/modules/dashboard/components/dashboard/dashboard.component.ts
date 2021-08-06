import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {CardModel} from "@shared/models";
import {ExampleService} from "@shared/services/example/example.service";
import {Subscription} from "rxjs";
import {SearchService} from "@shared/services/search/search.service";
import {getFavorites, getMostRecent} from "../../state/dashboard/selectors";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription = new Subscription();
  public favorites: CardModel[] = [];
  public mostRecent: CardModel[] = [];
  public searchResults: CardModel[] = [];

  constructor(private titleService: Title,
              private exampleService: ExampleService,
              private searchService: SearchService,
              private router: Router,
              private store$: Store) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
    this.loadFavorites();
    this.loadMostRecent();
  }

  public onCardClick(title: string): void {
    title = title.toLowerCase();
    const titleSplit = title.split(' ');
    const titleJoin = titleSplit.join('-');
    this.router.navigate([`lessons/${titleJoin}`]);
  }

  public onSearch(searchTerms: string): void {
    // TODO: Requires API to do the filtering of results
    this.subscriptions.add(
      this.searchService.getSearchResults(searchTerms).subscribe((results: CardModel[]) => {
        this.searchResults = results;
      })
    );
  }

  public loadFavorites(): void {
    this.subscriptions.add(
      this.store$.pipe(select(getFavorites)).subscribe((favorites: CardModel[]) => {
        this.favorites = favorites;
      })
    );
  }

  public loadMostRecent(): void {
    this.subscriptions.add(
      this.store$.pipe(select(getMostRecent)).subscribe((mostRecent: CardModel[]) => {
        this.mostRecent = mostRecent;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
