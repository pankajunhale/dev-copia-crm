import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrpRunComponent } from './mrp-run.component';

describe('MrpRunComponent', () => {
  let component: MrpRunComponent;
  let fixture: ComponentFixture<MrpRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrpRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrpRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
