import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreIssueViewComponent } from './store-issue-view.component';

describe('StoreIssueViewComponent', () => {
  let component: StoreIssueViewComponent;
  let fixture: ComponentFixture<StoreIssueViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreIssueViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreIssueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
