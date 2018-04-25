import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatGoodsSaleComponent } from './table-show-stat-goods-sale.component';

describe('TableShowStatGoodsSaleComponent', () => {
  let component: TableShowStatGoodsSaleComponent;
  let fixture: ComponentFixture<TableShowStatGoodsSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatGoodsSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatGoodsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
