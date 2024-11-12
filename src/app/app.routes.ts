import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesComponent } from './pages/page/pages.component';

export const appRoutes: Route[] = [
    {path: 'dashboard' , component:DashboardComponent},
    {path: ':page' , component:PagesComponent},
    { path: '404', component: ProductComponent }, // 404 Page
  { path: '**', redirectTo: '/404' }             
];
