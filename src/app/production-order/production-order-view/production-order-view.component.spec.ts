import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderViewComponent } from './production-order-view.component';

describe('PurchaseOrderViewComponent', () => {
  let component: ProductionOrderViewComponent;
  let fixture: ComponentFixture<ProductionOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
