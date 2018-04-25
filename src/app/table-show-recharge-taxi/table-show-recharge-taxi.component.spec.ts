import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowRechargeTaxiComponent } from './table-show-recharge-taxi.component';

describe('TableShowRechargeTaxiComponent', () => {
  let component: TableShowRechargeTaxiComponent;
  let fixture: ComponentFixture<TableShowRechargeTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowRechargeTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowRechargeTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
