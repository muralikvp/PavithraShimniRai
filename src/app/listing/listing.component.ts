import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'HopeTutors-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  public Customerdata: any;
  id!: any;
  count: number = 0;

  constructor(private service: CustomerService) {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.LoadCustomerData();
    this.id = setInterval(() => this.count++, 1000);
  }

  private LoadCustomerData() {
    this.service.LoadCustomer().subscribe((data) => {
      this.Customerdata = data.users;
    });
  }

  public delete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.service.RemoveCustomer(id).subscribe((result) => {
        if (result != null) {
          this.LoadCustomerData();
        }
      })
    }
  }

  ngOnDestroy() {
    clearInterval(this.id);
    console.log("ngOnDestroy");
  }


}
