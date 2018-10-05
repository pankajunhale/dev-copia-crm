import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingListComponent } from './routing-list.component';

describe('RoutingListComponent', () => {
  let component: RoutingListComponent;
  let fixture: ComponentFixture<RoutingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
