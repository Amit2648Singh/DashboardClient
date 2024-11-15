import { Route } from '@angular/router';
import { CoustomerComponent } from './pages/dashboard/coustomer.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesComponent } from './pages/page/pages.component';

export const appRoutes: Route[] = [
    {path: 'coustomer' , component:CoustomerComponent},
    {path: ':page' , component:PagesComponent},
    { path: '404', component: ProductComponent }, // 404 Page
  { path: '**', redirectTo: '/404' }             
];
