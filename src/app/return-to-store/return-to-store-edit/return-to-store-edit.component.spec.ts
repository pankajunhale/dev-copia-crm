import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToStoreEditComponent } from './return-to-store-edit.component';

describe('ReturnToStoreEditComponent', () => {
  let component: ReturnToStoreEditComponent;
  let fixture: ComponentFixture<ReturnToStoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnToStoreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnToStoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
