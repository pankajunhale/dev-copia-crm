import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionViewComponent } from './purchase-requisition-view.component';

describe('PurchaseRequisitionViewComponent', () => {
  let component: PurchaseRequisitionViewComponent;
  let fixture: ComponentFixture<PurchaseRequisitionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequisitionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
