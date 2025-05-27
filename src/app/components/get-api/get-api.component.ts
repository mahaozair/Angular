import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any[] = [];
  productList: any[] = [];
  constructor( private http: HttpClient) {
    
  }

  getusers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userList = res;
    })
  }
  getproducts() {
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((res2:any) => {
      this.productList = res2;
    })
  }
}
