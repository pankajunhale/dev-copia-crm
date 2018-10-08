import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreIssueListComponent } from './store-issue-list.component';

describe('StoreIssueListComponent', () => {
  let component: StoreIssueListComponent;
  let fixture: ComponentFixture<StoreIssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreIssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
