import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StartAndEndDate} from '../search/search.component';

@Component({
  selector: 'app-table-show-stat-finance-activity-balance',
  templateUrl: './table-show-stat-finance-activity-balance.component.html',
  styleUrls: ['./table-show-stat-finance-activity-balance.component.css']
})
export class TableShowStatFinanceActivityBalanceComponent implements OnInit {

  dataUrl_param = 'http://localhost:8080/stat_finance_activity_balance_param';
  dateUrl =  'http://localhost:8080/stat_finance_activity_balance';
  dataSet: Array<any> = [];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _bordered = true;
  _indeterminate = false;
  dateQuote: StartAndEndDate = new StartAndEndDate('', '');
  mark;
  startDate = null;
  stopDate = null;
  toDay = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.toDay = new Date();
    this.http.get(this.dateUrl).subscribe(res => {
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
  /* dayAndMonthHandler(mark) {
     console.log(mark);
     const param = {
       'mark': mark
     };
     if (mark != null) {
       console.log(mark);
       this.mark = mark;
     }
     this.http.get('http://localhost:8080/stat_finance_income', {params: param}).subscribe(res => {
       this.dataSet = Object.values(res);
       console.log(this.dataSet);
     });
   }*/
  dayAndMonthHandler(event: String) {
    console.log(event);
    const param = {
      'mark': event.toString()
    };
    if (event != null) {
      console.log(event);
      this.mark = event;
    }
    this.http.get(this.dateUrl, {params: param}).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }
  allDate1(event: String) {
    console.log(event);
    this.http.get(this.dateUrl).subscribe(res => {
      this.dataSet = Object.values(res);
    });
  }
  getStartAndStopDate(event: StartAndEndDate) {
    this.startDate = event.startTime;
    this.stopDate = event.endTime;
  }

}
