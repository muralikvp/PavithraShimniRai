import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

@Component({
  selector: 'HopeTutors-data-checker',
  templateUrl: './data-checker.component.html',
  styleUrls: ['./data-checker.component.css']
})
export class DataCheckerComponent {
  currentItem!: any;
  age!: number;
  IsVote!:boolean

  setUppercaseName(name: string) {
    this.currentItem = name.toUpperCase();
  }
  checkAgeLimit(age: number) {
    if (age > 18) {
      this.IsVote = true;
    }
    else
    {
      this.IsVote = false;
    }
  }
}
