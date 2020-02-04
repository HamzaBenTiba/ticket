import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNormalComponent } from './ticket-normal.component';

describe('TicketNormalComponent', () => {
  let component: TicketNormalComponent;
  let fixture: ComponentFixture<TicketNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
