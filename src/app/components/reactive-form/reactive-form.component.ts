import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    fname: new FormControl("",[Validators.required]),
    lname :new FormControl("",[Validators.required,Validators.minLength(4)]),
    username : new FormControl("",[Validators.pattern("xyz@gmail.com")]),
    city: new FormControl(""),
    state: new FormControl("Karachi"),
    zipcode: new FormControl(),
    isAgreed : new FormControl(false)
  }
  )
  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }
    ,5000)
  }
  onsave() {
    const isValid = this.userForm.valid;
    const formValue = this.userForm.value;
    
  }

}
