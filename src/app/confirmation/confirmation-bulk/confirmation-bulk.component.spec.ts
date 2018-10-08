import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBulkComponent } from './confirmation-bulk.component';

describe('ConfirmationBulkComponent', () => {
  let component: ConfirmationBulkComponent;
  let fixture: ComponentFixture<ConfirmationBulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationBulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
