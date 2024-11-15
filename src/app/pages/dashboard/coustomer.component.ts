import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesModule } from 'src/app/table/tables/tables.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,TablesModule],
  templateUrl: './coustomer.component.html',
  styleUrl: './coustomer.component.css',
})
export class CoustomerComponent {
  customers: any[] = []; // This will hold the response data
  additionalData: any ={}
  paginationData={
    page :1,
    pageSize :8,
    collectionSize :0,
    pageChange:this.pageChange.bind(this),
    searchUser:this.searchCoustomers.bind(this),
    selectedSortValue: 'acc'
  }
  constructor(private dataService: DataService) {}

  ngOnInit():void {
    this.loadCustomerData(1,8,this.paginationData.selectedSortValue)
  }
  loadCustomerData(page:number,limit:number,selectedSortValue:string):void {
    this.dataService.getCoustomers(page,limit,selectedSortValue).subscribe({
      next:(data)=>{
        console.log(data,"data");
        this.customers=data.users;
        this.additionalData=data
        this.paginationData.page=data.page;
        this.paginationData.collectionSize=data.totalUsers;
        // this.paginationData.pageSize=8;
      },
      error:(error)=>{
        console.error(error);
        
      }
    })
  }
  searchCoustomers(name:string,selectedSortValue:string):void{
    this.dataService.searchCoustomers(name,1,8,selectedSortValue).subscribe({
      next:(data)=>{
        this.customers=data.users;
        this.additionalData=data
        this.paginationData.page=data.page;
        this.paginationData.collectionSize=data.totalUsers;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  pageChange(pageNumber:number,selectedSortValue:string):void{
    this.loadCustomerData(pageNumber,8,selectedSortValue)
  }
}
