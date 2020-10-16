import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientDetaileComponent } from './client-detaile/client-detaile.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { DemandeDetaileComponent } from './demande-detaile/demande-detaile.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelDetaileComponent } from './hotel-detaile/hotel-detaile.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';


const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add', component: CreateClientComponent },
  { path: 'update/:id', component: UpdateClientComponent },
  { path: 'details/:id', component: ClientDetaileComponent },
  
  { path: '', redirectTo: 'demande', pathMatch: 'full' },
  { path: 'demandes', component:DemandeListComponent },
  { path: 'plus', component: CreateDemandeComponent },
  { path: 'uppdate/:id', component: UpdateDemandeComponent },
  { path: 'detaills/:id', component:DemandeDetaileComponent },
  
  { path: '', redirectTo: 'hotel', pathMatch: 'full' },
  { path: 'hotels', component:HotelListComponent },
  { path: 'ajout', component: CreateHotelComponent },
  { path: 'upddate/:id', component: UpdateHotelComponent },
  { path: 'detaile/:id', component:HotelDetaileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
