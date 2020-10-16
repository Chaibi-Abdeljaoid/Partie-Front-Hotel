import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  id: number;
  hotel: Hotel;
 submitted = false;


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

  updateHotel() {
    this.hotelService.updateHotel(this.id, this.hotel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hotel = new Hotel();
    this.gotoList();
  }

  onSubmit() {
this.submitted = true;

    this.updateHotel();    
  }

  gotoList() {
    this.router.navigate(['/hotels']);
  }

}
