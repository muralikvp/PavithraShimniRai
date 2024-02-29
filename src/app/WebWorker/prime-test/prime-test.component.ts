import { Component } from '@angular/core';

@Component({
  selector: 'HopeTutors-prime-test',
  templateUrl: './prime-test.component.html',
  styleUrls: ['./prime-test.component.css']
})
export class PrimeTestComponent {
  result: any;
  IntialValue!: number;

  LoadHeavyComp() {

    this.IntialValue = 777;
    if (typeof Worker !== 'undefined') {

      //Intialise the Web Worker
      const worker = new Worker(new URL('app.worker', import.meta.url));

      //Call Web Worker and Post Message
      worker.postMessage(20000);

      // Get Response from Web Worker
      worker.onmessage = ({ data }) => {
        this.result = data.prime;
      };

    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
