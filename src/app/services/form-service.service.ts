import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  
  formData: any;
  
  setData(data: any) {
    this.formData = data;
  }
  getData() {
    return this.formData;
  }
  updateData(updatedData: any) {
    this.formData = { ...this.formData, ...updatedData };
  }
  clearData() {
    this.formData = null;
  }
  constructor() { }
}
