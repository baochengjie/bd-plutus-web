import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowRechargeSumComponent } from './table-show-recharge-sum.component';

describe('TableShowRechargeSumComponent', () => {
  let component: TableShowRechargeSumComponent;
  let fixture: ComponentFixture<TableShowRechargeSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowRechargeSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowRechargeSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
