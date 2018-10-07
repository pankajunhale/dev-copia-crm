import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationEditComponent } from './confirmation-edit.component';

describe('ConfirmationEditComponent', () => {
  let component: ConfirmationEditComponent;
  let fixture: ComponentFixture<ConfirmationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
