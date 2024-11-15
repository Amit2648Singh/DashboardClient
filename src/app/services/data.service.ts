import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl ="http://localhost:3000/api/users"
  
  constructor(private http:HttpClient) {
  
   }
   getCoustomers(page:number,limit:number,selectedSortValue:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}&sort=${selectedSortValue}`)
  }
  searchCoustomers(name:String,page:number,limit:number,selectedSortValue:string):Observable<any>{
    return this.http.get<any>( `${this.apiUrl}?search=${name}&page=${page}&limit=${limit}&sort=${selectedSortValue}`)
  }
}

