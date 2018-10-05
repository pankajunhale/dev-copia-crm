import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCreateComponent } from './routing-create.component';

describe('RoutingCreateComponent', () => {
  let component: RoutingCreateComponent;
  let fixture: ComponentFixture<RoutingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
