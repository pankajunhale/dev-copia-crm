import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrpListComponent } from './mrp-list.component';

describe('MrpListComponent', () => {
  let component: MrpListComponent;
  let fixture: ComponentFixture<MrpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
