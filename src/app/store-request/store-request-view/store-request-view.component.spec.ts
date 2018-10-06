import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRequestViewComponent } from './store-request-view.component';

describe('StoreRequestViewComponent', () => {
  let component: StoreRequestViewComponent;
  let fixture: ComponentFixture<StoreRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
