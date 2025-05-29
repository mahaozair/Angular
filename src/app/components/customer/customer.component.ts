import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerObj: any  = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }
  customerArr: any []= []
  constructor(private custservice: CustomerService) {
    this.getCustomers();

  }
  // getCustomers() {
  //   this.http.get('/api/CarRentalApp/GetCustomers').subscribe((res:any) => {
  //     this.customerArr = res.data;
  //   })
  // }
  getCustomers() {
    this.custservice.loadCustomers().subscribe((res: any) => {
      this.customerArr = res.data;
    })
  }
  reset() {
    this.customerObj = {
      customerId: 0,
      customerName: "",
      customerCity: "",
      mobileNo: "",
      email: ""
    };
  }
  onsave() {
    this.custservice.createCustomer(this.customerObj).subscribe((res: any) => {
      if (res.result) {
        alert("Customer created");
        this.getCustomers();
      } else {
        alert(res.message);
      }
    })
  }
}
