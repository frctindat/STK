import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposItemComponent } from './equipos-item.component';

describe('EquiposItemComponent', () => {
  let component: EquiposItemComponent;
  let fixture: ComponentFixture<EquiposItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
