import { Component } from '@angular/core';
import { ComponentInteractService } from '../component-interact.service';

@Component({
  selector: 'HopeTutors-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  ReceivedMessage!: string;

  constructor(private compoInteractSerice: ComponentInteractService) {}

  GetMessage() {
    this.ReceivedMessage = this.compoInteractSerice.message;
  }
}
