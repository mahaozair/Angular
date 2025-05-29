import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit,AfterViewInit{
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit"),
      performance.now();
  }
  cars: any[] = [];
  carObj : any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  }
  http = inject(HttpClient);

  getallcars() {
    // this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) => {
    //   this.cars = res.data;
    // })
    this.http.get('/api/CarRentalApp/GetCars').subscribe((res:any)=>{
      this.cars = res.data;
    })
  }
  ngOnInit(): void {
    this.getallcars();
  }
  onsave() {
    this.http.post('/api/CarRentalApp/CreateNewCar', this.carObj).subscribe((res: any) => {
      if (res.result == true) {
        alert("car created successfully")
        this.getallcars();
      } else {
        alert(res.message)
      }
    })
  }
  onUpdate() {
    this.http.put('/api/CarRentalApp/UpdateCar',this.carObj).subscribe((res: any) => {
      if (res.result == true) {
        alert("car updated successfully")
        this.getallcars();
      } else {
        alert(res.message)
      }
    });
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete this entry?");
    if (isDelete == true) {
      this.http.delete('/api/CarRentalApp/DeleteCarbyCarId?carid=' + id, this.carObj).subscribe((res: any) => {
        if (res.result == true) {
          alert("car deleted successfully")
          this.getallcars();
        } else {
          alert(res.message)
        }
      })
    }
  }
  update(data : any){
    this.carObj = data;
  }
}
