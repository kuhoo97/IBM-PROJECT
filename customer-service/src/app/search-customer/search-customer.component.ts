import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {ActivatedRoute,Router} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
// @ts-ignore
  id: number
  // @ts-ignore
  customer: Customer;
  constructor(private router: Router,private route: ActivatedRoute, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    // @ts-ignore
    this.customer=new Customer();
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    });
  }
  onSubmit(id:any){
    console.log(id);
    // @ts-ignore
    this.customerService.getCustomerById(id).subscribe( data =>{
       // this.goToCustom();
      console.log(data);
      this.customer=data;
      console.log(this.customer);
      }
      // @ts-ignore
      , error => console.log(error));
  }

  /*goToCustom(){
    this.router.navigate(['/search-customer/:id']);
  }*/
}
