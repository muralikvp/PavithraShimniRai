import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'HopeTutors-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  stream$ = of('water');

  //1) Pipes in Angular: A pipe takes in data as input and transforms it to the desired output
  waterPipe$ = this.stream$
    .pipe(filter((w) => w === 'water')) //Filter the Water
    .subscribe((w) => console.log('Drink it', w));

  waterPipe1$ = this.stream$.pipe(
      map((w) => warmup(w)))     //Heat the water
    .subscribe((x) => console.log("Take Shower", x));

  waterPipe2$ =  this.stream$.pipe(
      filter((water => water === "water")), //Won't Execute
      map((water) => warmup(water))    //Won't Execute
  ).subscribe((water) => console.log("Take Shower", water));


}

function warmup(water: string): any {
  return 'Heat ' + water;
}
