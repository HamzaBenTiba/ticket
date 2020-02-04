import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticket';
  loadedChoix='ticket';
  onNavigate(choix:string){
    this.loadedChoix=choix;

  }
}
