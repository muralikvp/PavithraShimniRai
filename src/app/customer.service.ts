import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInfo } from './customer-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }

  SaveCustomer(customerData: CustomerInfo):Observable<any> {
    let data = this.http.post(this.apiurl + '/add', customerData);
    return data;
  }

  LoadCustomerbycode(id: number) {
    return this.http.get(this.apiurl + '/' + id);
  }

  LoadCustomer(): Observable<any> {
    return this.http.get(this.apiurl);
  }

  RemoveCustomer(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  LoadCustomerPaginatedData(page: number, itemsPerPage: number): Observable<any> {

    const params = new HttpParams()
      .set('skip', ((page - 1) * itemsPerPage).toString())
      .set('limit', itemsPerPage.toString());

    return this.http.get(this.apiurl, { params });
  }

}
