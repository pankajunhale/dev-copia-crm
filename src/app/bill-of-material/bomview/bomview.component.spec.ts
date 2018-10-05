import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomviewComponent } from './bomview.component';

describe('BomviewComponent', () => {
  let component: BomviewComponent;
  let fixture: ComponentFixture<BomviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
