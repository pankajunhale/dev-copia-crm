import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionCreateComponent } from './purchase-requisition-create.component';

describe('PurchaseRequisitionCreateComponent', () => {
  let component: PurchaseRequisitionCreateComponent;
  let fixture: ComponentFixture<PurchaseRequisitionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequisitionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
