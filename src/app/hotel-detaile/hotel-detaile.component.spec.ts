import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetaileComponent } from './hotel-detaile.component';

describe('HotelDetaileComponent', () => {
  let component: HotelDetaileComponent;
  let fixture: ComponentFixture<HotelDetaileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetaileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
