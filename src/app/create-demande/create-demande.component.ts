import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css']
})
export class CreateDemandeComponent implements OnInit {

  demande: Demande = new Demande();
  submitted = false;

  constructor(private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit() {
  }

  newDemande(): void {
    this.submitted = false;
    this.demande = new Demande();
  }

  save() {
    this.demandeService.createDemande(this.demande)
      .subscribe(data => console.log(data), error => console.log(error));
    this.demande = new Demande();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/demandes']);
  }

}
