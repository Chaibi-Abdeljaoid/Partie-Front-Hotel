import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-detaile',
  templateUrl: './client-detaile.component.html',
  styleUrls: ['./client-detaile.component.css']
})
export class ClientDetaileComponent implements OnInit {

  id: number;
  client:Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService:ClientService) { }

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];
    
    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['clients']);
  }


}
