import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTaxiBatchComponent } from './table-show-stat-taxi-batch.component';

describe('TableShowStatTaxiBatchComponent', () => {
  let component: TableShowStatTaxiBatchComponent;
  let fixture: ComponentFixture<TableShowStatTaxiBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTaxiBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTaxiBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
