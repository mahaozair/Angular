import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl: string = "/api/CarRentalApp/";
  constructor(private http: HttpClient) {

   }
  loadCustomers() {
    return this.http.get(this.apiurl+"GetCustomers");
  }
  createCustomer(obj:any) {
    return this.http.post(this.apiurl+"CreateNewCustomer",obj);
  }
}
