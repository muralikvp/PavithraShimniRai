import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { ComponentInteractComponent } from './component-interact/component-interact.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [

     ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CompCommunicateModule { }

