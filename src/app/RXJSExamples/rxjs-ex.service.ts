import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsExService {
  Sender$: any;
  randomOb$: any;
  public Sub1$ = new BehaviorSubject<number>(0);

  constructor() {
    this.Sender$ = new Observable((s) => {
      console.log('Console Start');
      setTimeout(() => s.next('11'), 5000);
      setTimeout(() => s.next('22'), 2000);
      s.next('Murali');
      s.next('Vairamani');
      //s.error('Occurred from Observable');
      s.next('Hope Tutors');
     // s.complete();
      s.next('Sheik');
      s.next('Angular Training');
      // setTimeout(() => s.next("44"), 1000);
    });

     this.randomOb$ = new Observable((s) => {
      s.next(Math.random());
    });

    this.Sub1$.next(Math.random());
  }
}
