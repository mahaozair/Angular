import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["Karachi", "islamabad", "Multan", "Lahore", "Quetta"];
  employeeArr: any[] = [
    { empId: 121, name: 'AAA', city: "Karachi", contactNo: 111111 },
    { empId: 122, name: 'BBB', city: "Karachi", contactNo: 111561 },
    { empId: 123, name: 'CCC', city: "Lahore", contactNo: 134111 },
    {empId:124, name:'DDD' ,city:"Multan",contactNo:1111890}
  ]
}
