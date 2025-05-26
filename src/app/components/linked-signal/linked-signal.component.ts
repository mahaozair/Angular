import { Component,signal,linkedSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName = signal<string>("Maha");
  lastname = signal<string>("Ozair");
  fullname =linkedSignal (
    {
      source: this.firstName,
      computation: (newVal, prevVal) => {
        debugger;
        const fullName = newVal + " " + this.lastname();
        return fullName;
      }
    }
  )
  user = signal({ id: 111, name: "Maha" });
  email = linkedSignal(
    {
      source:this.user,
      computation: user => `${user.name + user.id}@gmail.com`,
      equal: (a: any, b: any) => a.id !== b.id
    }
  )
  changename() {
    this.firstName.set("smth");
  }
  changeid() {
    this.user.set({id:123,name:"Maha"});
  }
}
