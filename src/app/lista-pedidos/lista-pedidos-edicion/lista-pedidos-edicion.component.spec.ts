import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosEdicionComponent } from './lista-pedidos-edicion.component';

describe('ListaPedidosEdicionComponent', () => {
  let component: ListaPedidosEdicionComponent;
  let fixture: ComponentFixture<ListaPedidosEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidosEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
