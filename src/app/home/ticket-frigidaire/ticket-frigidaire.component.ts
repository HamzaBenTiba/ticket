import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-frigidaire',
  templateUrl: './ticket-frigidaire.component.html',
  styleUrls: ['./ticket-frigidaire.component.css']
})
export class TicketFrigidaireComponent implements OnInit {
frgForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }
  print(form: NgForm){
    const value=form.value;
  }

}
