import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRequestEditComponent } from './store-request-edit.component';

describe('StoreRequestEditComponent', () => {
  let component: StoreRequestEditComponent;
  let fixture: ComponentFixture<StoreRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
