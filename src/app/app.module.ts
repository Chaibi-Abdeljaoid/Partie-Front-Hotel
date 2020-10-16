import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { DemandeDetaileComponent } from './demande-detaile/demande-detaile.component';
import { ClientDetaileComponent } from './client-detaile/client-detaile.component';
import { HotelDetaileComponent } from './hotel-detaile/hotel-detaile.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    CreateHotelComponent,
    CreateDemandeComponent,
    DemandeDetaileComponent,
    ClientDetaileComponent,
    HotelDetaileComponent,
    HotelListComponent,
    DemandeListComponent,
    ClientListComponent,
    UpdateClientComponent,
    UpdateDemandeComponent,
    UpdateHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
