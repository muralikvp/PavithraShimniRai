import { Component } from '@angular/core';
import { RxjsExService } from '../rxjs-ex.service';

@Component({
  selector: 'HopeTutors-receiver1',
  templateUrl: './receiver1.component.html',
  styleUrls: ['./receiver1.component.css']
})
export class Receiver1Component {
  receiveMessage: string ="";

  constructor(private service: RxjsExService) {

    service.Sender$.subscribe({
      next: (v: any) => {

        if (v == 'Murali') {
          this.receiveMessage = this.receiveMessage + "*******" +'Trainer ' + v
        } else if (v == 'Vairamani') {
          this.receiveMessage = this.receiveMessage + "*******"  +'Student ' + v;
        } else {
          this.receiveMessage = this.receiveMessage + "*******" + v;
        }
      },
      error: (e: any) => { this.receiveMessage = "*******" + "Error Occurerd:" + e},
      complete: () => { this.receiveMessage = this.receiveMessage + " ******* Completed" },
    }
    );
}
}
