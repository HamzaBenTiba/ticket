import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() choiceSelected= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onSelect(choix: string){
this.choiceSelected.emit(choix);
  }

}
