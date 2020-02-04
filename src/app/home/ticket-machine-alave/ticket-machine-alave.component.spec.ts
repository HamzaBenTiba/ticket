import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMachineAlaveComponent } from './ticket-machine-alave.component';

describe('TicketMachineAlaveComponent', () => {
  let component: TicketMachineAlaveComponent;
  let fixture: ComponentFixture<TicketMachineAlaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMachineAlaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMachineAlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
