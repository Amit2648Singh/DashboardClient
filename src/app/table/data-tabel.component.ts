import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customersdata } from './customer-tabel';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
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
  imports: [CommonModule,FormsModule,NgbTypeaheadModule,NgbPaginationModule],
  templateUrl: './data-tabel.component.html',
  styleUrl: './data-tabel.component.css',
})
export class DatatableComponent {
  @Input() customerData:Customer[] =[]
  @Input() additionalData: any;
  @Input() paginationData:{
    collectionSize:number,
    page:number,
    pageSize:number,
    pageChange:(pageNumber:number,selectedSortValue:string)=>void,
    searchUser:(name:string,selectedSortValue:string)=>void,
    selectedSortValue:string
  } ={
      collectionSize:0,page:0,pageSize:0,pageChange:()=>{},searchUser:()=>{},selectedSortValue:'acc'
    } 
   
  customers: Customer[] = []
  filterText = '';
  sortColumn: keyof Customer = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
 
  constructor(private dataService:DataService) {
		
	}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customerData'] && this.customerData.length) {
      this.filteredCustomers(); 
      console.log(this.paginationData,"paginationData");
      
    }
  }
  filteredCustomers() {
    this.customers = this.customerData.filter(customer =>
      customer.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
    return this.sortOrder === 'asc'
      ? this.customers.sort((a, b) => (a[this.sortColumn] > b[this.sortColumn] ? 1 : -1))
      : this.customers.sort((a, b) => (a[this.sortColumn] < b[this.sortColumn] ? 1 : -1));
  }

  sortTable(column: keyof Customer): void {
    this.sortColumn = column;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
  onPageChange(newPage: number): void {
    this.paginationData.pageChange(newPage,this.paginationData.selectedSortValue)
  }
  onSearch(event:Event){
    const value=(event.target as HTMLInputElement).value
    const wordCount=value.trim().split(/\s+/).length;
    console.log(wordCount,value.length);
    
    if(value.length ===3)
    {
      console.log(wordCount,value);
      this.paginationData.searchUser(value,this.paginationData.selectedSortValue)
    }else if (value.trim() === '') 
    {
      this.paginationData.pageChange(1,this.paginationData.selectedSortValue)
    }
  }
  onSort(sort:string){
    console.log(sort,"sort");
    this.paginationData.pageChange(1,sort)
  }
}
