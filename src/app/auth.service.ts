import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class
import { Observable } from 'rxjs';
import { LoginDetails } from './login-details';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiurl: string = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) {} // Use the imported HttpClient class

  CheckLogin(userCredentials: LoginDetails):Observable<any> {
    let result = this.http.post(this.apiurl, userCredentials);
    console.log(result);
    return result;
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return 'TestToken';
  }
}
