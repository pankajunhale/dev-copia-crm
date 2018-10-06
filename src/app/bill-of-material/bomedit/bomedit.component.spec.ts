import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomeditComponent } from './bomedit.component';

describe('BomeditComponent', () => {
  let component: BomeditComponent;
  let fixture: ComponentFixture<BomeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
