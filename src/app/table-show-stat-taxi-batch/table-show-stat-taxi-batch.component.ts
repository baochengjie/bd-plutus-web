import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StartAndEndDate} from '../search/search.component';

@Component({
  selector: 'app-table-show-stat-taxi-batch',
  templateUrl: './table-show-stat-taxi-batch.component.html',
  styleUrls: ['./table-show-stat-taxi-batch.component.css']
})
export class TableShowStatTaxiBatchComponent implements OnInit {

  dataUrl = 'http://localhost:8080/batch_payment';
  dataUrl_param = 'http://localhost:8080/batch_payment_param';
  dataSet: Array<any> = [];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _indeterminate = false;
  dateQuote: StartAndEndDate = new StartAndEndDate('', '');

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const params = {
      'app_type': 'taxi'
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
  dateHandler(event: StartAndEndDate) {
    this.dateQuote = event;
    console.log(event);
    const params = {
      'app_type': 'taxi',
      'endDate': String(this.dateQuote.startTime),
      'startDate': String(this.dateQuote.endTime)
    };
    this.http.get(this.dataUrl_param, {params: params}).subscribe(res => {
      this.dataSet = Object.values(res);
      console.log(this.dataSet);
    });
  }

}
