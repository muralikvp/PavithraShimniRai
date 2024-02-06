import { Component } from '@angular/core';

@Component({
  selector: 'HopeTutors-pipe-ex',
  templateUrl: './pipe-ex.component.html',
  styleUrls: ['./pipe-ex.component.css'],
})
export class PipeExComponent {
  name: string = 'Hope Tutors';
  accountBalance: number = 1000000000;
  dateObj = Date.now();
  pi: number = 3.14159265359;
  pi1: number = 3;

  //2024-12-31T18:30:00.000Z
}
