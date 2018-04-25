import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowBatchPaymentComponent } from './table-show-batch-payment.component';

describe('TableShowBatchPaymentComponent', () => {
  let component: TableShowBatchPaymentComponent;
  let fixture: ComponentFixture<TableShowBatchPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowBatchPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowBatchPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
