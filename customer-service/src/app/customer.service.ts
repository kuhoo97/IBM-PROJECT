import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private baseURL= 'http://customerclient-env.eba-gyckzvjd.ap-south-1.elasticbeanstalk.com/api/customers';
  constructor(private httpClient: HttpClient) { }


getCustomerList(): Observable<Customer[]> {
  return this.httpClient.get<Customer[]>(`${this.baseURL}`);
}

// tslint:disable-next-line:ban-types
createCustomer(customer: Customer): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, customer);
}


getCustomerById(id: number):Observable<Customer> {
  return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
}

updateCustomer(id: number, customer: Customer): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, customer);
}

deleteCustomer(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
