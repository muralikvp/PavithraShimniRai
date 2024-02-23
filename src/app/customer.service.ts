import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInfo } from './customer-info';

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

}
