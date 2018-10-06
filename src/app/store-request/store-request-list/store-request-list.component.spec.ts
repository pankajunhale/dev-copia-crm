import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRequestListComponent } from './store-request-list.component';

describe('StoreRequestListComponent', () => {
  let component: StoreRequestListComponent;
  let fixture: ComponentFixture<StoreRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
