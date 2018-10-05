import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocreateComponent } from './production-order-create.component';

describe('PocreateComponent', () => {
  let component: PocreateComponent;
  let fixture: ComponentFixture<PocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
