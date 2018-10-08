import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRequestCreateComponent } from './store-request-create.component';

describe('StoreRequestCreateComponent', () => {
  let component: StoreRequestCreateComponent;
  let fixture: ComponentFixture<StoreRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
