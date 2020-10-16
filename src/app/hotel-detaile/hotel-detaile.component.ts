import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-detaile',
  templateUrl: './hotel-detaile.component.html',
  styleUrls: ['./hotel-detaile.component.css']
})
export class HotelDetaileComponent implements OnInit {

  id: number;
  hotel: Hotel;

  constructor(private route: ActivatedRoute,private router: Router,
    private hotelService: HotelService) { }

  ngOnInit() {
    this.hotel = new Hotel();

    this.id = this.route.snapshot.params['id'];
    
    this.hotelService.getHotel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hotel = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['hotels']);
  }

}
