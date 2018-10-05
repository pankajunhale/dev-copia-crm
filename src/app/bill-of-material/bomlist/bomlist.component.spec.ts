import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomlistComponent } from './bomlist.component';

describe('BomlistComponent', () => {
  let component: BomlistComponent;
  let fixture: ComponentFixture<BomlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
