import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { navbarData } from '../../sidebar/nav-data';
@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export class PagesComponent implements OnInit {
  page = '';
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.page = params['page']; // Get dynamic route parameter
      const isValidRoute = navbarData.some(
        (navItem) => navItem.routeLink === this.page
      );

      if (!isValidRoute) {
        // Redirect to 404 if invalid route
        this.router.navigate(['/404']);
      }
    });
  }
}
