import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {CardModel} from "@shared/models";
import {DashboardFavoritesDataExample, DashboardMostRecentDataExample} from "./data.example";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public favorites: CardModel[] = DashboardFavoritesDataExample;
  public mostRecent: CardModel[] = DashboardMostRecentDataExample;

  constructor(private titleService: Title,
              private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
  }

  public onCardClick(title: string): void {
    title = title.toLowerCase();
    const titleSplit = title.split(' ');
    const titleJoin = titleSplit.join('-');
    this.router.navigate([`lessons/${titleJoin}`]).then(x => console.log(x)).catch(e => console.warn(e));
  }

  public onSearch(searchTerms: string): void {
    // TODO: Requires API to do the filtering of results
    console.log(searchTerms);
  }
}
