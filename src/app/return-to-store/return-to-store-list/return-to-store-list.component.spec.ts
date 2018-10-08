import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToStoreListComponent } from './return-to-store-list.component';

describe('ReturnToStoreListComponent', () => {
  let component: ReturnToStoreListComponent;
  let fixture: ComponentFixture<ReturnToStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnToStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnToStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
