import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { TicketFrigidaireComponent } from './home/ticket-frigidaire/ticket-frigidaire.component';
import { TicketMachineAlaveComponent } from './home/ticket-machine-alave/ticket-machine-alave.component';
import { TicketTvComponent } from './home/ticket-tv/ticket-tv.component';
import { TicketNormalComponent } from './home/ticket-normal/ticket-normal.component';
import { MiniTicketComponent } from './home/mini-ticket/mini-ticket.component';
import { NgForm } from '@angular/forms';
import { ExpComponent } from './home/exp/exp.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    TicketFrigidaireComponent,
    TicketMachineAlaveComponent,
    TicketTvComponent,
    TicketNormalComponent,
    MiniTicketComponent,
    NgForm,
    ExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
