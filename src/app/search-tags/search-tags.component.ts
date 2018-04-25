import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DateUtils} from '../../util/date_utils';

@Component({
  selector: 'app-search-tags',
  templateUrl: './search-tags.component.html',
  styleUrls: ['./search-tags.component.css']
})
export class SearchTagsComponent implements OnInit {
  @Output()
  markEmitter: EventEmitter<String> = new EventEmitter<String>();
  @Output()
  dateEmitter: EventEmitter<StartAndEndDate> = new EventEmitter<StartAndEndDate>();
  @Output()
  allEmitter: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }
  dayAndMonthHandler(mark) {
    this.markEmitter.emit(mark);
}
  todayDate() {
    const startDate = new Date();
    const stopDate = new Date();
    const startAndStop = new StartAndEndDate(startDate, stopDate);
    this.dateEmitter.emit(startAndStop);
  }
  yestodayDate() {
    const startDate = new Date(new Date().getTime() - 86400000);
    const stopDate = new Date();
    const startAndStop = new StartAndEndDate(startDate, stopDate);
    this.dateEmitter.emit(startAndStop);
  }
  thisWeek() {
    const startDate = new DateUtils().getWeekOneDay();
    const stopDate = new Date();
    const startAndStop = new StartAndEndDate(startDate, stopDate);
    this.dateEmitter.emit(startAndStop);
  }
  lastWeek() {
    const  util = new DateUtils();
    const startDate = util.lastWeekOneDay();
    const stopDate = util.lastWeeklastDay();
    const startAndStop = new StartAndEndDate(startDate, stopDate);
    this.dateEmitter.emit(startAndStop);
  }
  thisMonth() {
    const startDate = new DateUtils().monthOneDay();
    const stopDate = new Date();
    const startAndStop = new StartAndEndDate(startDate, stopDate);
    this.dateEmitter.emit(startAndStop);
  }
  lastMonth() {
    const util = new DateUtils();
    const startDate = util.lastMonthOneDay();
    const stopDate = util.lastMonthLastDay();
    const startAndStop = new StartAndEndDate(startDate, stopDate);
    this.dateEmitter.emit(startAndStop);
  }
  allDate() {
    this.allEmitter.emit( '22');
  }
}
export class StartAndEndDate {
  constructor(public startTime: Date, public endTime: Date) {
  }
}
