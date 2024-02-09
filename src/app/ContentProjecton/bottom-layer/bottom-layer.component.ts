import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'HopeTutors-bottom-layer',
  templateUrl: './bottom-layer.component.html',
  styleUrls: ['./bottom-layer.component.css'],
})
export class BottomLayerComponent {
  private firstNumber!: number;
  private secondNumber: number = 100;
  public resultArr: string[] = ['Shimmni Rai', 'Pavithra', 'Hope Tutors'];
  private responseData: any;

  constructor(private auth: AuthService) {}

  Login = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  public ProceedLogin(): void {
    if (this.Login.valid) {
      this.auth.CheckLogin(this.Login.value).subscribe((response: any) => {
        console.log(response);
      });
      console.log('Inside Login function');
    } else {
      console.log('Login Failed');
    }
  }
}
