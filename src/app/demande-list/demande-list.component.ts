import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from '../demande';
import { Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  demandes: Observable<Demande[]>;

  constructor(private demandeService: DemandeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.demandes = this.demandeService.getDemandesList();
  }

  deleteDemande(id: number) {
    this.demandeService.deleteDemande(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  demandeDetaills(id: number){
    this.router.navigate(['detaills', id]);
  }
  uppdateDemande(id: number){
    this.router.navigate(['uppdate', id]);
  }

}
