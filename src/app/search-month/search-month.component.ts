import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-search-month',
  templateUrl: './search-month.component.html',
  styleUrls: ['./search-month.component.css'],
  providers: [DatePipe]
})
@Injectable()
export class SearchMonthComponent implements OnInit {
  @Input()
  _month = new Date();
  @Input()
  typeAndDate;
  @Output()
  month_date: EventEmitter<string> = new EventEmitter<string>();
  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
  }
  searchByMonth() {
    const month = this.datePipe.transform(this._month, 'yyyy-MM');
    this.month_date.emit(month);
  }
}
