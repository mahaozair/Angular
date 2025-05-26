import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  divVisible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';
  employeeArr: any[] = [
    { empId: 121, name: 'AAA', city: "Karachi", contactNo: 111111 },
    { empId: 122, name: 'BBB', city: "Karachi", contactNo: 111561 },
    { empId: 123, name: 'CCC', city: "Lahore", contactNo: 134111 },
    {empId:124, name:'DDD' ,city:"Multan",contactNo:1111890}
  ]
  cityList: string[] = [
    "karachi","lahore","multan"
  ]
  visibility(val:boolean) {
    this.divVisible = val;
  }

}
