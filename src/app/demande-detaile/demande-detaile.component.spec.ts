import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDetaileComponent } from './demande-detaile.component';

describe('DemandeDetaileComponent', () => {
  let component: DemandeDetaileComponent;
  let fixture: ComponentFixture<DemandeDetaileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDetaileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
