import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'HopeTutors-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  public Customerdata: any;
  id!: any;
  count: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems!: number;



  constructor(private service: CustomerService, private route: ActivatedRoute) {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.loadIntialData();

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

  SearchCustomer(search: string) {

    this.service.LoadCustomerPaginatedData(this.currentPage,this.itemsPerPage).subscribe((data) => {
      if (search == "" || search == null) {
        this.Customerdata = data.users;
        this.totalItems = data.totalItems;
      }
      else {
        this.Customerdata = this.Customerdata.filter((res: { firstName: string; }) => {
          return res.firstName.toLocaleLowerCase().match(search.toLocaleLowerCase());
        });
        this.totalItems = this.Customerdata.length;
      }
    });

  }

  loadIntialData() {
    let search: string = "";
    this.route.queryParams.subscribe(params => {
      search = params['search'];
    });
    this.SearchCustomer(search);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadIntialData();
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadIntialData();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadIntialData();
    }
  }

  goToPage(page: string): void {
    const pageNumber = parseInt(page, 10);
    if (pageNumber && pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
      this.currentPage = pageNumber;
      this.loadIntialData();
    }
  }

}
