import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginDetails } from '../login-details';

@Component({
  selector: 'HopeTutors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private firstNumber!: number;
  private secondNumber: number = 100;
  public resultArr: string[] = ['Shimmni Rai', 'Pavithra', 'Hope Tutors'];
  private responseData: any;

  constructor(private auth:AuthService) { }

  Login = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });

  public ProceedLogin(): void {
    if (this.Login.valid) {

      let loginOb: LoginDetails = {
        username: this.Login.value.username!,
        password: this.Login.value.password!
      };

      this.auth.CheckLogin(loginOb).subscribe((response: any) => {
        console.log(response);
      });

      console.log("Inside Login function");

    }
    else {
      console.log('Login Failed');
    }

  }

}
