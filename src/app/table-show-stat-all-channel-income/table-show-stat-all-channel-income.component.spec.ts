import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatAllChannelIncomeComponent } from './table-show-stat-all-channel-income.component';

describe('TableShowStatAllChannelIncomeComponent', () => {
  let component: TableShowStatAllChannelIncomeComponent;
  let fixture: ComponentFixture<TableShowStatAllChannelIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatAllChannelIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatAllChannelIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
