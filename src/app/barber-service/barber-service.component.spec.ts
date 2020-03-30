import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberServiceComponent } from './barber-service.component';

describe('BarberServiceComponent', () => {
  let component: BarberServiceComponent;
  let fixture: ComponentFixture<BarberServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
