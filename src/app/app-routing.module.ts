import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketFrigidaireComponent } from './home/ticket-frigidaire/ticket-frigidaire.component';
import { TicketMachineAlaveComponent } from './home/ticket-machine-alave/ticket-machine-alave.component';
import { TicketTvComponent } from './home/ticket-tv/ticket-tv.component';
import { TicketNormalComponent } from './home/ticket-normal/ticket-normal.component';
import { MiniTicketComponent } from './home/mini-ticket/mini-ticket.component';
import {ExpComponent} from './home/exp/exp.component';

const routes: Routes = [
   {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent} ,
  {path:'FRG',component: TicketFrigidaireComponent},
  {path:'MAL',component: TicketMachineAlaveComponent},
  {path:'Tv',component: TicketTvComponent},
  {path:'Normal',component: TicketNormalComponent},
  {path:'Mini',component: MiniTicketComponent},
  {path:'exp',component: ExpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
