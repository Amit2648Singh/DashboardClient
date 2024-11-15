import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from '../pages/customer/customer.component';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getCustomer(
    page: number,
    limit: number,
    selectedSortValue: string
  ): Observable<Response> {
    return this.http.get<Response>(
      `${this.apiUrl}?page=${page}&limit=${limit}&sort=${selectedSortValue}`
    );
  }
  searchCustomer(
    name: string,
    page: number,
    limit: number,
    selectedSortValue: string
  ): Observable<Response> {
    return this.http.get<Response>(
      `${this.apiUrl}?search=${name}&page=${page}&limit=${limit}&sort=${selectedSortValue}`
    );
  }
}
