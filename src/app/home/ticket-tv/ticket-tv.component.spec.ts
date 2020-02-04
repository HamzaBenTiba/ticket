import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTvComponent } from './ticket-tv.component';

describe('TicketTvComponent', () => {
  let component: TicketTvComponent;
  let fixture: ComponentFixture<TicketTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
