import { Component, OnInit } from '@angular/core';
import {SearchMonthComponent} from '../search-month/search-month.component';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-table-show-recharge-taxi',
  templateUrl: './table-show-recharge-taxi.component.html',
  styleUrls: ['./table-show-recharge-taxi.component.css'],
})
export class TableShowRechargeTaxiComponent implements OnInit {

  dataUrl_param = 'http://localhost:8080/stat_recharge_param';
  dateUrl =  'http://localhost:8080/stat_recharge_detail_taxi';
  dataSet: Array<any> = [];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _bordered = true;
  _indeterminate = false;
  monthDate;
  aaa: any;
  typeAndDate;
  constructor(private http: HttpClient, private routerInfo: ActivatedRoute, private datePige: DatePipe) {
  }

  ngOnInit() {
    this.typeAndDate = this.routerInfo.snapshot.params['typeAndDate'];
    this.monthDate =  this.datePige.transform(this.typeAndDate.split('_')[1], 'yyyy-MM');
    console.log(this.monthDate);
    const params = {
      'typeAndDate': this.typeAndDate
    };
    this.http.get(this.dateUrl, {params: params}).subscribe(res => {
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
    this.monthDate = event;
    console.log(event);
  }
}
