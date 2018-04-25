import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatFinanceMallPayChannelComponent } from './table-show-stat-finance-mall-pay-channel.component';

describe('TableShowStatFinanceMallPayChannelComponent', () => {
  let component: TableShowStatFinanceMallPayChannelComponent;
  let fixture: ComponentFixture<TableShowStatFinanceMallPayChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatFinanceMallPayChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatFinanceMallPayChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
