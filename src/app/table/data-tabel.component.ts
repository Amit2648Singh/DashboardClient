import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Response, Customer } from '../pages/customer/customer.component';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
  templateUrl: './data-tabel.component.html',
  styleUrl: './data-tabel.component.css',
})
export class DatatableComponent implements OnChanges {
  @Input() customerData: Customer[] = [];
  @Input() additionalData: Response = {
    totalUsers: 0,
    page: 0,
    itemFrom: 0,
    itemTo: 0,
    totalPages: 0,
    activeCustomer: 0,
    users: [],
  };
  @Input() paginationData: {
    collectionSize: number;
    page: number;
    pageSize: number;
    pageChange: (pageNumber: number, selectedSortValue: string) => void;
    searchUser: (name: string, selectedSortValue: string) => void;
    selectedSortValue: string;
  } = {
    collectionSize: 0,
    page: 0,
    pageSize: 0,
    pageChange: (pageNumber, selectedSortValue) => {
      console.log(
        `page Change  to ${pageNumber} with sort ${selectedSortValue}`
      );
    },
    searchUser: (name, selectedSortValue) => {
      console.log(`Search user ${name} with sort ${selectedSortValue}`);
    },
    selectedSortValue: 'acc',
  };

  customers: Customer[] = [];
  filterText = '';
  sortColumn: keyof Customer = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customerData'] && this.customerData.length) {
      this.filteredCustomers();
      console.log(this.paginationData, 'paginationData');
    }
  }
  filteredCustomers() {
    this.customers = this.customerData.filter((customer) =>
      customer.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
    return this.sortOrder === 'asc'
      ? this.customers.sort((a, b) =>
          a[this.sortColumn] > b[this.sortColumn] ? 1 : -1
        )
      : this.customers.sort((a, b) =>
          a[this.sortColumn] < b[this.sortColumn] ? 1 : -1
        );
  }

  sortTable(column: keyof Customer): void {
    this.sortColumn = column;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
  onPageChange(newPage: number): void {
    this.paginationData.pageChange(
      newPage,
      this.paginationData.selectedSortValue
    );
  }
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const wordCount = value.trim().split(/\s+/).length;
    console.log(wordCount, value.length);

    if (value.length === 3) {
      console.log(wordCount, value);
      this.paginationData.searchUser(
        value,
        this.paginationData.selectedSortValue
      );
    } else if (value.trim() === '') {
      this.paginationData.pageChange(1, this.paginationData.selectedSortValue);
    }
  }
  onSort(sort: string) {
    console.log(sort, 'sort');
    this.paginationData.pageChange(1, sort);
  }
}
