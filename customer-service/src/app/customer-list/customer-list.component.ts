import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
   customers: Customer[]=[];
  constructor(private customerService: CustomerService,
              private router: Router   ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }

  // @ts-ignore
  updateCustomer(id) {
    this.router.navigate(['update-customer', id]);
  }

  // @ts-ignore
  deleteCustomer(id) {
    if(confirm("Do you really want to delete?")) {
      // @ts-ignore
      this.customerService.deleteCustomer(id).subscribe(data => {
        console.log(data);
        this.getCustomers();

      });
    }
    else {
      this.router.navigate(['/customers']);
    }
}
  customerDetails(id : number) {
    this.router.navigate(['customer-details',id]);
  }
}


