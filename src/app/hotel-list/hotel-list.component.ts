import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../hotel';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Observable<Hotel[]>;

  constructor(private hotelService: HotelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.hotels = this.hotelService.getHotelsList();
  }

  deleteHotel(id: number) {
    this.hotelService.deleteHotel(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  hotelDetaile(id: number){
    this.router.navigate(['detaile', id]);
  }
  upddateHotel(id: number){
    this.router.navigate(['upddate', id]);
  }

}
