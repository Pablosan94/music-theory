import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSidebarActive: boolean = false;

  public onToggleSidebar(isSidebarActive: boolean) {
    this.isSidebarActive = isSidebarActive;
  }
}
