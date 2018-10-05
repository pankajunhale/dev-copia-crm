import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeditComponent } from './production-order-edit.component';

describe('PoeditComponent', () => {
  let component: PoeditComponent;
  let fixture: ComponentFixture<PoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
