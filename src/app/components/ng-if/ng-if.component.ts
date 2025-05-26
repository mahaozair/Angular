import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  
  isVisible: boolean = true;
  number1: string = '';
  number2: string = '';
  Show() {
    this.isVisible = true;
  }
  Hide() {
    this.isVisible = false;
  }
}
