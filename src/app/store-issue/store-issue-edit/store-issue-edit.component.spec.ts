import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreIssueEditComponent } from './store-issue-edit.component';

describe('StoreIssueEditComponent', () => {
  let component: StoreIssueEditComponent;
  let fixture: ComponentFixture<StoreIssueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreIssueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreIssueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
