import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToStoreCreateComponent } from './return-to-store-create.component';

describe('ReturnToStoreCreateComponent', () => {
  let component: ReturnToStoreCreateComponent;
  let fixture: ComponentFixture<ReturnToStoreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnToStoreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnToStoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
