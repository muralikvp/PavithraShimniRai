import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiurl: string = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) {} // Use the imported HttpClient class

  CheckLogin(userCredentials: any) {
    let result = this.http.post(this.apiurl, userCredentials);
    return result;
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return 'TestToken';
  }
}
