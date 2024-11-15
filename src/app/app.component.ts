import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { LoaderComponent } from './component/loader/loader.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  standalone: true,
  imports: [SidebarComponent, RouterModule, LoaderComponent, BodyComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'customerdashboard';
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
