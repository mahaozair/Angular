import { ChangeDetectionStrategy } from '@angular/core';
import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName= signal("Maha");
  lastName = signal<string>("Ozair");
  courseName: string = "Angular";
  rollNo= signal<number>(0);
  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      debugger;
      this.firstName.set("smth else");
      this.courseName = "React Js";
      debugger;
    }, 5000)
  }
  onIncrement() {
    this.rollNo.update(oldVal=>oldVal+1)
  }
}
