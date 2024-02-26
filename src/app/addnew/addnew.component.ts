import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerInfo } from '../customer-info';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'HopeTutors-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent {
  messageclass:string = '';
  message: string = '';
  responsedata: any;
  customerId!: number;
  editdata: any;

  constructor(private custService: CustomerService, private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.customerId = idParam ? parseInt(idParam) : 0;
    if (this.customerId > 0) {
      this.UpdateCustomer(this.customerId);
    }
   }

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl('', Validators.required),
  });

  SaveCustomer() {
    if (this.register.valid) {

      let customer: CustomerInfo = {
        name: this.register.value.name || '',
        email: this.register.value.email || '',
        phone: parseInt(this.register.value.phone ?? '', 0) || 0,
      }; // Initialize the customer variable

      this.custService.SaveCustomer(customer).subscribe((result) => {
        console.log(result);
       });
    }
  }

  get code() {
    return this.register.get('code');
  }

  get name() {
    return this.register.get('name');
  }
  get email() {
    return this.register.get('email');
  }

  UpdateCustomer(Id: number) {
    this.custService.LoadCustomerbycode(Id).subscribe((data) => {
      this.editdata = data;
      this.register = new FormGroup({
        id: new FormControl(this.editdata.id),
        name: new FormControl(this.editdata.firstName),
        email: new FormControl(this.editdata.email),
        phone: new FormControl(this.editdata.phone),
      });
    });
  }

}
