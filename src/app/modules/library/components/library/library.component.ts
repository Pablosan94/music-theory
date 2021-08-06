import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {CardModel} from "@shared/models";
import {ExampleService} from "@shared/services/example/example.service";
import {Subscription} from "rxjs";
import {SearchService} from "@shared/services/search/search.service";
import {select, Store} from "@ngrx/store";
import {getFavorites} from "../../../dashboard/state/dashboard/selectors";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription = new Subscription();
  public searchResults: CardModel[] = [];

  public favorites: CardModel[] = [];

  constructor(private titleService: Title,
              private searchService: SearchService,
              private store$: Store) { }

  ngOnInit(): void {
    this.titleService.setTitle('Library');
    this.loadInitialLibrary();

    this.subscriptions.add(
      this.store$.pipe(select(getFavorites)).subscribe(favorites => {
        this.favorites = favorites;
      })
    )
  }

  public loadInitialLibrary(): void {
    this.subscriptions.add(
      this.searchService.getSearchResults('').subscribe((results: CardModel[]) => {
        this.searchResults = results;
      })
    );
  }

  public onSearch(searchTerms: string): void {
    this.subscriptions.add(
      this.searchService.getSearchResults(searchTerms).subscribe((results: CardModel[]) => {
        this.searchResults = results;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
