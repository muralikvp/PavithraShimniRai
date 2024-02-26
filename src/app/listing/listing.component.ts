import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'HopeTutors-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  public Customerdata: any;

  constructor(private service: CustomerService) {
    this.LoadCustomerData();
  }

  private LoadCustomerData() {
    this.service.LoadCustomer().subscribe((data) => {
      this.Customerdata = data.users;
    });
  }


}
