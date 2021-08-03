import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('search') searchInput: ElementRef;

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  public subscription: Subscription = new Subscription();

  ngAfterViewInit(): void {
    this.subscription.add(
      fromEvent(this.searchInput.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(350),
          distinctUntilChanged(),
          tap(() => {
            this.onSearch.emit(this.searchInput.nativeElement.value)
          })
        ).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
