import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinEquipoComponent } from './sin-equipo.component';

describe('SinEquipoComponent', () => {
  let component: SinEquipoComponent;
  let fixture: ComponentFixture<SinEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
