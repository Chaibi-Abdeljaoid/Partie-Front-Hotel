import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel: Hotel= new Hotel();
  submitted = false;

  constructor(private hotelService:  HotelService,
    private router: Router) { }

  ngOnInit() {
  }

  newHotel(): void {
    this.submitted = false;
    this.hotel = new Hotel();
  }

  save() {
    this.hotelService.createHotel(this.hotel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hotel = new Hotel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/hotels']);
  }
}
