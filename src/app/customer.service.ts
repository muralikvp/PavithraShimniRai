import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInfo } from './customer-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }

  SaveCustomer(customerData: CustomerInfo) {
    let data = this.http.post(this.apiurl + '/add', customerData);
    return data;
  }

  LoadCustomerbycode(id: number) {
    return this.http.get(this.apiurl + '/' + id);
  }

  LoadCustomer(): Observable<any> {
    return this.http.get(this.apiurl);
  }


}
