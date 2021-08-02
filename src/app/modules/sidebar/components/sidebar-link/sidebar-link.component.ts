import {Component, HostListener, Input, OnInit} from '@angular/core';

import { MIN_DESKTOP_WIDTH } from 'shared/constants';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() href: string = '';
  @Input() isSidebarActive: boolean = false;

  public isMobile: boolean = false;
  public tooltipStyle: any = {};

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.checkMobile(window.innerWidth);
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
