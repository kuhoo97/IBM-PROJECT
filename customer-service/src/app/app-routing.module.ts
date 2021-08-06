import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";
import {SearchCustomerComponent} from "./search-customer/search-customer.component";

const routes: Routes = [

  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'customer-details/:id', component: CustomerDetailsComponent},
  {path: 'search-customer', component: SearchCustomerComponent},
  //{path: 'search-customer/:id', component: SearchCustomerComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
