import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTaxiChannelIncomeComponent } from './table-show-stat-taxi-channel-income.component';

describe('TableShowStatTaxiChannelIncomeComponent', () => {
  let component: TableShowStatTaxiChannelIncomeComponent;
  let fixture: ComponentFixture<TableShowStatTaxiChannelIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTaxiChannelIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTaxiChannelIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
