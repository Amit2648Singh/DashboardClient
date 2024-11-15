import { Route } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { PagesComponent } from './pages/page/pages.component';
import { NotFoundComponent } from './pages/NotFound/notFound.component';
export const appRoutes: Route[] = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: '404', component: NotFoundComponent },
  { path: ':page', component: PagesComponent },
  { path: '**', redirectTo: '/404' },
];
