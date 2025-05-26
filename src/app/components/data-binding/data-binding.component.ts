import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Maha";
  rollNo: number = 111;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "bg-primary";
  selectedCity: string = "";
  
  constructor() {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
    this.showwelcomemessage();
  }
  showwelcomemessage() {
    alert("Welcome to angular 19 tutorial!");
  }
  oncitychanges() {
    console.log("event changed")
  }
}
