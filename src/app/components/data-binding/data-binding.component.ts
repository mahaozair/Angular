import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

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
  
  constructor(private router: Router) {

    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
    // this.showwelcomemessage();
  }
  navigatetoadmin() {
    this.router.navigateByUrl("/admin");
  }
  showwelcomemessage() {
    alert("Welcome to angular 19 tutorial!");
  }
  oncitychanges() {
    console.log("event changed")
  }
}
