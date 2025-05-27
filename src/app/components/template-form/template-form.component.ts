import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userObj: any = {
    firstName: '',
    lastname: '',
    userName: '',
    city: '',
    state:'',
    zipCode: '',
    isTermsAgreed:false
  }
  onsave() {
    debugger;
    const formValue = this.userObj;
  }
}
