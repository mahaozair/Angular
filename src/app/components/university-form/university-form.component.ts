import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-university-form',
  imports: [ReactiveFormsModule],
  templateUrl: './university-form.component.html',
  styleUrl: './university-form.component.css'
})
export class UniversityFormComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    middleName:new FormControl(""),
    lastName:new FormControl("",[Validators.required,Validators.minLength(4)]),
    dateOfBirth: new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    nationalId: new FormControl("",[Validators.required]),
    // profilePhoto: null, 
    permanentAddress: new FormControl(""),
    currentAddress: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    province: new FormControl("",[Validators.required]),
    country: new FormControl("",[Validators.required]),
    username: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    confirmPassword: new FormControl("",[Validators.required]),
    hasDisability: new FormControl(false),
    acceptedTerms: new FormControl(false),
    confirmedInformation: new FormControl(false)
  })
  
constructor(){
  this.studentForm.controls['state'].disable();
}
  onSubmit() {
    const isValid = this.studentForm.valid;
    const formValue = this.studentForm.value;
  }
}
