import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderConfirmationComponent } from './production-order-confirmation.component';

describe('ProductionOrderConfirmationComponent', () => {
  let component: ProductionOrderConfirmationComponent;
  let fixture: ComponentFixture<ProductionOrderConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOrderConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrderConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
