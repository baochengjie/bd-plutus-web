import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowRechargeTaxiSumComponent } from './table-show-recharge-taxi-sum.component';

describe('TableShowRechargeTaxiSumComponent', () => {
  let component: TableShowRechargeTaxiSumComponent;
  let fixture: ComponentFixture<TableShowRechargeTaxiSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowRechargeTaxiSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowRechargeTaxiSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
