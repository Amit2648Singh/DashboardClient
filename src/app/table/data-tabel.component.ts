import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customersdata } from './customer-tabel';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

interface Customer {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
}
@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule,FormsModule,NgbPaginationModule],
  templateUrl: './data-tabel.component.html',
  styleUrl: './data-tabel.component.css',
})
export class DatatableComponent {
  customers: Customer[] = customersdata
  filterText = '';
  sortColumn: keyof Customer = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
  collectionSize: number =customersdata.length
  constructor() {
		this.refreshCountries();
	}
  refreshCountries() {
		
	}
  
  filteredCustomers() {
    console.log(this.customers,"customers");
    let filtered = this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
    return this.sortOrder === 'asc'
      ? filtered.sort((a, b) => (a[this.sortColumn] > b[this.sortColumn] ? 1 : -1))
      : filtered.sort((a, b) => (a[this.sortColumn] < b[this.sortColumn] ? 1 : -1));
  }

  sortTable(column: any) {
    this.sortColumn = column;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
