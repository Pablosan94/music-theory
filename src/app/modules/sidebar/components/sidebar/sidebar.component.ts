import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';

import { MIN_DESKTOP_WIDTH } from "shared/constants";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') nav: any;

  @Output() onToggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isMobile: boolean = false;
  public isSidebarActive: boolean = false;
  public tooltipStyle: any = {};

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile(event.target.innerWidth);
  }

  constructor() { }

  ngOnInit(): void {
    this.checkMobile(window.innerWidth);
  }

  public onMenuClick(): void {
    this.nav.nativeElement.classList.toggle('active');
    this.isSidebarActive = !this.isSidebarActive;
    this.onToggleNav.emit(this.isSidebarActive);
  }

  public onSearchClick(): void {
    if (!this.isSidebarActive) {
      this.nav.nativeElement.classList.toggle('active');
      this.isSidebarActive = !this.isSidebarActive;
      this.onToggleNav.emit(this.isSidebarActive);
    }
  }

  public onMouseOver(): void {
    if (!this.isSidebarActive) {
      this.tooltipStyle = {
        'opacity': '1',
        'transition': 'all 500ms ease',
        'top': '50%'
      }
    }
  }

  public onMouseOut(): void {
    this.tooltipStyle = {};
  }

  private checkMobile(width: number) {
    this.isMobile = width < MIN_DESKTOP_WIDTH;
  }
}
