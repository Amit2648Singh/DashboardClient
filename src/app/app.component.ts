import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoustomerComponent } from './pages/dashboard/coustomer.component';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './pages/product/product.component';
// import { HttpClient } from '@angular/common/http';
interface SideNavToggle{
  screenWidth :number;
  collapsed : boolean;
}
@Component({
  standalone: true,
  imports: [SidebarComponent, RouterModule,CoustomerComponent,BodyComponent,ProductComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-project';
  isSideNavCollapsed= false;
  screenWidth =  0
  onToggleSideNav(data:SideNavToggle):void {
      this.screenWidth=data.screenWidth;
      this.isSideNavCollapsed=data.collapsed
  }
}
