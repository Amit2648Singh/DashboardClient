import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from '../data-tabel.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,DatatableComponent
  ],
  exports:[DatatableComponent]
})
export class TablesModule { 

}
