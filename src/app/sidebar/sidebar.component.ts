import { Component, Output,EventEmitter, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';
import { RouterLink,RouterLinkActive,RouterConfigOptions, Router } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';




interface SideNavToggle{
  screenWidth :number;
  collapsed : boolean;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [

    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidebarComponent implements  OnInit {


  @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();

  collapsed =false;
  screenWidth = 0
  navData=navbarData ;

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  ngOnInit(): void {
      this.screenWidth=window.innerWidth
  }
  toggleCollapse() :void {
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth :this.screenWidth})

  }
  closeSidenav():void {
      this.collapsed = false
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth :this.screenWidth})

  }
}
