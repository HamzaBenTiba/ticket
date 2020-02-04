import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFrigidaireComponent } from './ticket-frigidaire.component';

describe('TicketFrigidaireComponent', () => {
  let component: TicketFrigidaireComponent;
  let fixture: ComponentFixture<TicketFrigidaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFrigidaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFrigidaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
