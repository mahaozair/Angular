import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-university-form',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './university-form.component.html',
  styleUrl: './university-form.component.css'
})
export class UniversityFormComponent {
  imagePreview: string | ArrayBuffer | null = null;
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    middleName: new FormControl(""),
    lastName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    dateOfBirth: new FormControl("", [Validators.required]),
    startDate: new FormControl("", [Validators.required]),
    endDate:new FormControl("",[Validators.required]),
    gender: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(11),Validators.pattern('^[0-9]*$')]),
    nationalId: new FormControl("", [Validators.required]),
    profilePhoto: new FormControl(null),
    profilePhotoPreview: new FormControl(null),//new
    permanentAddress: new FormControl(""),
    currentAddress: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    province: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
    hasDisability: new FormControl(false),
    acceptedTerms: new FormControl(false),
    confirmedInformation: new FormControl(false)
  },{ validators:[this.passwordMatchValidator , this.dateChecker]})
  
  constructor(private router: Router, private formService: FormServiceService) {
  }
  onSubmit() {
    if (this.studentForm.valid) {
      setTimeout(() => {
        this.formService.setData(this.studentForm.value);
        this.router.navigateByUrl('/patch-form');
      }, 2000);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  dateChecker(group:AbstractControl):ValidationErrors | null {
    const sdate = group.get('startDate')?.value;
    const edate = group.get('endDate')?.value;if (!sdate || !edate) return null;
    const start = new Date(sdate);
    const end = new Date(edate);
    return start <= end ? null : { dateChecker: true };
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.studentForm.patchValue({ profilePhoto: file });
      this.studentForm.get('profilePhoto')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.studentForm.patchValue({ profilePhotoPreview: reader.result });//new
      };
      reader.readAsDataURL(file);
    }
  }
  
}
