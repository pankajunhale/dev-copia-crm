import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToStoreViewComponent } from './return-to-store-view.component';

describe('ReturnToStoreViewComponent', () => {
  let component: ReturnToStoreViewComponent;
  let fixture: ComponentFixture<ReturnToStoreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnToStoreViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnToStoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
