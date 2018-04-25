import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTaxiFinanceOfflineComponent } from './table-show-stat-taxi-finance-offline.component';

describe('TableShowStatTaxiFinanceOfflineComponent', () => {
  let component: TableShowStatTaxiFinanceOfflineComponent;
  let fixture: ComponentFixture<TableShowStatTaxiFinanceOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTaxiFinanceOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTaxiFinanceOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
