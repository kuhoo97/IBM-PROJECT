import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
// @ts-ignore
  id: number
  // @ts-ignore
  customer: Customer;
  constructor(private route: ActivatedRoute, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    // @ts-ignore
    this.customer=new Customer();
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    });
  }

}
