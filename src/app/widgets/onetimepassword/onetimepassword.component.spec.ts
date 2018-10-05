import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetimepasswordComponent } from './onetimepassword.component';

describe('OnetimepasswordComponent', () => {
  let component: OnetimepasswordComponent;
  let fixture: ComponentFixture<OnetimepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetimepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetimepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
