import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormServiceService } from '../../services/form-service.service';
import { FormGroup, FormBuilder, Validators,FormControl, ReactiveFormsModule,AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-patch-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './patch-form.component.html',
  styleUrl: './patch-form.component.css'
})
export class PatchFormComponent implements OnInit {
    studentForm!: FormGroup;
    imagePreview: string | ArrayBuffer | null = null;
  
    constructor(private fb: FormBuilder, private formService: FormServiceService) {
      
    }
  
    ngOnInit(): void {
      const data = this.formService.getData();
      console.log(data.profilePhoto);
      console.log(data.profilePhotoPreview);
        this.studentForm = this.fb.group({
        firstName: [data.firstName, Validators.required],
        middleName: [data.middleName],
        lastName: [data.lastName, [Validators.required, Validators.minLength(4)]],
        dateOfBirth: [data.dateOfBirth],
        gender: [data.gender, Validators.required],
        email: [data.email, [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
        phone: [data.phone, [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
        nationalId: [data.nationalId, Validators.required],
        currentAddress: [data.currentAddress, Validators.required],
        city: [data.city, Validators.required],
        profilePhoto: [data.profilePhoto],
        profilePhotoPreview: [data.profilePhotoPreview],
        province: [data.province, Validators.required],
        startDate: [data.startDate, Validators.required],
        endDate: [data.startDate, Validators.required],
        country: [data.country, Validators.required],
        username: [data.username, Validators.required],
        password: [data.password, Validators.required],
        confirmPassword: [data.confirmPassword, Validators.required],
        acceptedTerms: [data.acceptedTerms, Validators.requiredTrue],
        confirmedInformation: [data.confirmedInformation, Validators.requiredTrue]
      }, { validators: this.passwordMatchValidator });
  
      if (data.profilePhotoPreview) {
        this.imagePreview = data.profilePhotoPreview;
      } else if (data.profilePhoto instanceof File) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(data.profilePhoto);
      }
      
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
  
    onSubmit(): void {
      if (this.studentForm.valid) {
        const updatedData = this.studentForm.value;
        this.formService.updateData(updatedData);
        alert('Form submitted successfully!');
      } else {
        this.studentForm.markAllAsTouched();
      }
    }
  
    passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    }
}
