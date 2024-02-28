import { Component } from '@angular/core';
import { RxjsExService } from '../rxjs-ex.service';

@Component({
  selector: 'HopeTutors-receiver2',
  templateUrl: './receiver2.component.html',
  styleUrls: ['./receiver2.component.css']
})
export class Receiver2Component {
receiveMessage: string = "";
  constructor(private service: RxjsExService) {
    service.Sender$.subscribe({
      next: (v:any) => {
        this.receiveMessage = this.receiveMessage + "*******" + " 2nd Receiver " + v;
      },
      error: (e: any) => { this.receiveMessage = "*******" + "Error Occurerd:" + e },
      complete: () => { this.receiveMessage = this.receiveMessage + " ******* Completed" },
    }
    );
  }

}
