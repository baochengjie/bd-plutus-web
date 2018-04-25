import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowRechargeComponent } from './table-show-recharge.component';

describe('TableShowRechargeComponent', () => {
  let component: TableShowRechargeComponent;
  let fixture: ComponentFixture<TableShowRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
