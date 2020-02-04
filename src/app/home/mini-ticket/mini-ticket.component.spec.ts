import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTicketComponent } from './mini-ticket.component';

describe('MiniTicketComponent', () => {
  let component: MiniTicketComponent;
  let fixture: ComponentFixture<MiniTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
