import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetaileComponent } from './client-detaile.component';

describe('ClientDetaileComponent', () => {
  let component: ClientDetaileComponent;
  let fixture: ComponentFixture<ClientDetaileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetaileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
