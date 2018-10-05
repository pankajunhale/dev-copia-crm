import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolistComponent } from './polist.component';

describe('PolistComponent', () => {
  let component: PolistComponent;
  let fixture: ComponentFixture<PolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
