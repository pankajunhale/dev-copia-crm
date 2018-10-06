import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionEditComponent } from './purchase-requisition-edit.component';

describe('PurchaseRequisitionEditComponent', () => {
  let component: PurchaseRequisitionEditComponent;
  let fixture: ComponentFixture<PurchaseRequisitionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequisitionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
