import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingEditComponent } from './routing-edit.component';

describe('RoutingEditComponent', () => {
  let component: RoutingEditComponent;
  let fixture: ComponentFixture<RoutingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
