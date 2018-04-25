import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatBatchComponent } from './table-show-stat-batch.component';

describe('TableShowStatBatchComponent', () => {
  let component: TableShowStatBatchComponent;
  let fixture: ComponentFixture<TableShowStatBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
