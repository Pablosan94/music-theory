import {Component, HostListener, Input, OnInit} from '@angular/core';
import {isMobileWidth} from "@shared/utils/window.utils";

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
    this.isMobile = isMobileWidth(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.isMobile = isMobileWidth(window.innerWidth);
  }

  public onMouseOver(): void {
    if (!this.isSidebarActive && !this.isMobile) {
      this.tooltipStyle = {
        'opacity': '1',
        'transition': 'all 500ms ease',
        'top': '50%'
      }
    } else if (!this.isSidebarActive && this.isMobile) {
      this.tooltipStyle = {
        'opacity': '1',
        'transition': 'all 500ms ease',
        'top': '120%'
      }
    }
  }

  public onMouseOut(): void {
    this.tooltipStyle = {};
  }
}
