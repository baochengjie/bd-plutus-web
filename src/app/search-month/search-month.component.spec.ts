import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMonthComponent } from './search-month.component';

describe('SearchMonthComponent', () => {
  let component: SearchMonthComponent;
  let fixture: ComponentFixture<SearchMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
