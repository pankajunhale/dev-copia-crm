import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionbuttonComponent } from './optionbutton.component';

describe('OptionbuttonComponent', () => {
  let component: OptionbuttonComponent;
  let fixture: ComponentFixture<OptionbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
