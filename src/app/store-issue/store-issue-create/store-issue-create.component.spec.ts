import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreIssueCreateComponent } from './store-issue-create.component';

describe('StoreIssueCreateComponent', () => {
  let component: StoreIssueCreateComponent;
  let fixture: ComponentFixture<StoreIssueCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreIssueCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreIssueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
