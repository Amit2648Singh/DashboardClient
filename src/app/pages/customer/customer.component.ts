import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesModule } from '../../table/tables/tables.module';
import { DataService } from '../../services/data.service';
import { LoaderService } from '../../services/loader.service';

export interface Customer {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
  date: string;
}
export interface Response {
  totalUsers: number;
  page: number;
  itemFrom: number;
  itemTo: number;
  totalPages: number;
  users: Customer[];
}

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, TablesModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  additionalData: Response = {
    totalUsers: 0,
    page: 0,
    itemFrom: 0,
    itemTo: 0,
    totalPages: 0,
    users: [],
  };
  paginationData = {
    page: 1,
    pageSize: 8,
    collectionSize: 0,
    pageChange: this.pageChange.bind(this),
    searchUser: this.searchCustomer.bind(this),
    selectedSortValue: 'acc',
  };
  constructor(
    private dataService: DataService,
    private loadService: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCustomerData(1, 8, this.paginationData.selectedSortValue);
  }
  loadCustomerData(
    page: number,
    limit: number,
    selectedSortValue: string
  ): void {
    this.loadService.show();
    this.dataService.getCustomer(page, limit, selectedSortValue).subscribe({
      next: (data) => {
        console.log(data, 'data');
        this.customers = data.users;
        this.additionalData = data;
        this.paginationData.page = data.page;
        this.paginationData.collectionSize = data.totalUsers;
        this.loadService.hide();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
        this.loadService.hide();
        this.cdr.detectChanges();
      },
    });
  }
  searchCustomer(name: string, selectedSortValue: string): void {
    this.loadService.show();
    this.dataService.searchCustomer(name, 1, 8, selectedSortValue).subscribe({
      next: (data) => {
        this.customers = data.users;
        this.additionalData = data;
        this.paginationData.page = data.page;
        this.paginationData.collectionSize = data.totalUsers;
        this.loadService.hide();
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loadService.hide();
        this.cdr.detectChanges();
      },
    });
  }
  pageChange(pageNumber: number, selectedSortValue: string): void {
    this.loadCustomerData(pageNumber, 8, selectedSortValue);
  }
}
