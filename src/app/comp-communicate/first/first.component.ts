import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentInteractService } from '../component-interact.service';

@Component({
  selector: 'HopeTutors-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {

  constructor(private compoInteractSerice: ComponentInteractService) { }

  Communi = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  SendMessage()
  {
    let username = this.Communi.value.username;
    if (username) {
      //username !=null && username != undefined
      this.compoInteractSerice.message = username;
   }

  }
}
