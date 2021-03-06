import { Component, OnInit } from '@angular/core';
import {StartAndEndDate} from '../search/search.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-table-stat-makeup-cut',
  templateUrl: './show-table-stat-makeup-cut.component.html',
  styleUrls: ['./show-table-stat-makeup-cut.component.css']
})
export class ShowTableStatMakeupCutComponent implements OnInit {

  dataUrl_param = 'http://localhost:8080/stat_makeup_cut_param';
  dataUrl = 'http://localhost:8080/stat_makeup_cut';
  dataSet: Array<any> = [];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _indeterminate = false;
  _bordered = true;
  dateQuote: StartAndEndDate = new StartAndEndDate('', '');
  mark;
  startDate = null;
  stopDate = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }
  _displayDataChange($event) {
    this._displayData = $event;
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this.dataSet.some(value => value.checked);
    this._checkedNumber = this.dataSet.filter(value => value.checked).length;
  }
  dateHandler(event: StartAndEndDate) {
    this.dateQuote = event;
    console.log(event);
    const params = {
      'endDate': String(this.dateQuote.startTime),
      'startDate': String(this.dateQuote.endTime),
      'mark': this.mark
    };
    this.http.get(this.dataUrl_param, {params: params}).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }
  dayAndMonthHandler(mark) {
    console.log(mark);
    const param = {
      'mark': mark
    };
    if (mark != null) {
      console.log(mark);
      this.mark = mark;
    }
    this.http.get(this.dataUrl, {params: param}).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }
  allDate1(event: String) {
    console.log(event);
    this.http.get(this.dataUrl).subscribe(res => {
      this.dataSet = Object.values(res);
    });
  }
  getStartAndStopDate(event: StartAndEndDate) {
    this.startDate = event.startTime;
    this.stopDate = event.endTime;
  }
}
