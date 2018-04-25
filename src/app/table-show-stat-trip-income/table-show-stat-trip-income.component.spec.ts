import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTripIncomeComponent } from './table-show-stat-trip-income.component';

describe('TableShowStatTripIncomeComponent', () => {
  let component: TableShowStatTripIncomeComponent;
  let fixture: ComponentFixture<TableShowStatTripIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTripIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTripIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
