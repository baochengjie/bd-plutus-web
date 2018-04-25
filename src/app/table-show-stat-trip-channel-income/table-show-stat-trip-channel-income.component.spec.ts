import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTripChannelIncomeComponent } from './table-show-stat-trip-channel-income.component';

describe('TableShowStatTripChannelIncomeComponent', () => {
  let component: TableShowStatTripChannelIncomeComponent;
  let fixture: ComponentFixture<TableShowStatTripChannelIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTripChannelIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTripChannelIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
