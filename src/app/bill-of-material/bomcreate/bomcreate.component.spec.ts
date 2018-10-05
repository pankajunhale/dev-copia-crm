import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomcreateComponent } from './bomcreate.component';

describe('BomcreateComponent', () => {
  let component: BomcreateComponent;
  let fixture: ComponentFixture<BomcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
