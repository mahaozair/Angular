import { Component,OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked");

  }
  ngAfterContentInit():void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked():void {
    console.log("ngAfterContentChecked");
  }
  ngOnDestroy(): void{
    alert("you are leaving the page");
  }
}
