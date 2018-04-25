import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-show-recharge-taxi-sum',
  templateUrl: './table-show-recharge-taxi-sum.component.html',
  styleUrls: ['./table-show-recharge-taxi-sum.component.css'],
  providers: [DatePipe]
})
export class TableShowRechargeTaxiSumComponent implements OnInit {
  dataUrl =  'http://localhost:8080/stat_recharge_month_taxi';
  dataSet: Array<any> = [];
  dataSetDatil: Array<any> = [];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _bordered = true;
  _indeterminate = false;
  monthDate;
  typeAndDate;
  constructor(private http: HttpClient, private router: Router, private datePige: DatePipe ) { }

  ngOnInit() {
    this.monthDate = this.datePige.transform(new Date(), 'yyyy-MM');
    const params = {
      'monthDate': this.monthDate,
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
      'monthDate': String(this.monthDate),
      'typeAndDate': this.typeAndDate
    };
    this.http.get(this.dataUrl, {params: params}).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }
  showMonthRecharge(request_type) {
    /*if (this.ifHide) {
      this.ifHide = false;
      return;
    }*/
    console.log(request_type + '日期' + this.monthDate);
    this.typeAndDate = request_type + '_' + this.monthDate;
    this.router.navigate(['/recharge/' + this.typeAndDate]);
    /*this.ifHide = true;*/
  }

}
