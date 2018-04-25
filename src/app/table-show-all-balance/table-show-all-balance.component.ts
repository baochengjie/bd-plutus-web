import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-table-show-all-balance',
  templateUrl: './table-show-all-balance.component.html',
  styleUrls: ['./table-show-all-balance.component.css'],
  providers: [DatePipe]
})
export class TableShowAllBalanceComponent implements OnInit {
  dataUrl =  'http://localhost:8080/stat_all_finance_balance';
  dataSet: Array<any> = [];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _bordered = true;
  _indeterminate = false;
  monthDate;
  typeAndDate;
  aaa: Array<any>;
  expandDataCache = {};
  constructor(private http: HttpClient, private router: Router, private datePipe1: DatePipe) { }

  ngOnInit() {
    this.monthDate = this.datePipe1.transform(new Date(), 'yyyy-MM');
    const params = {
      'monthDate': '2016-03',
    };
    this.http.get(this.dataUrl, {params: params}).subscribe(res => {
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
  dateHandler(event: String) {
    this.monthDate = event.substr(0, 7);
    console.log(event);
    const params = {
      'monthDate': String(this.monthDate)
    };
    this.http.get(this.dataUrl, {params: params}).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }
}
