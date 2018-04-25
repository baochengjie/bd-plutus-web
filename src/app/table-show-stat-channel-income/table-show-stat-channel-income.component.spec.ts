import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatChannelIncomeComponent } from './table-show-stat-channel-income.component';

describe('TableShowStatChannelIncomeComponent', () => {
  let component: TableShowStatChannelIncomeComponent;
  let fixture: ComponentFixture<TableShowStatChannelIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatChannelIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatChannelIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
