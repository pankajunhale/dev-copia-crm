import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionListComponent } from './purchase-requisition-list.component';

describe('PurchaseRequisitionListComponent', () => {
  let component: PurchaseRequisitionListComponent;
  let fixture: ComponentFixture<PurchaseRequisitionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequisitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
