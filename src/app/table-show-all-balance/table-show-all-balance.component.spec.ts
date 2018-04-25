import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowAllBalanceComponent } from './table-show-all-balance.component';

describe('TableShowAllBalanceComponent', () => {
  let component: TableShowAllBalanceComponent;
  let fixture: ComponentFixture<TableShowAllBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowAllBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowAllBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
