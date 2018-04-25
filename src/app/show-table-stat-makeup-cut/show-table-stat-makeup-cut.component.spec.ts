import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTableStatMakeupCutComponent } from './show-table-stat-makeup-cut.component';

describe('ShowTableStatMakeupCutComponent', () => {
  let component: ShowTableStatMakeupCutComponent;
  let fixture: ComponentFixture<ShowTableStatMakeupCutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTableStatMakeupCutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTableStatMakeupCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
