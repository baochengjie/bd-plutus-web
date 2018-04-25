import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DatePipe]
})
  export class SearchComponent implements OnInit {
  @Input()
  date: Date = new Date();
  @Input()
  date1: Date = null;
  @Input()
   test;
  dataUrl1 = 'http://localhost:8080/stat_finance_income_param';
  @Output()
  lastDate: EventEmitter<StartAndEndDate> = new EventEmitter<StartAndEndDate>();
  constructor(private datePipe: DatePipe, private http: HttpClient) {
  }
  ngOnInit() {
  }
  serchByDate() {
      const dateQuote = new StartAndEndDate(this.datePipe.transform(this.date, 'yyyy-MM-dd'),
      this.datePipe.transform(this.date1, 'yyyy-MM-dd'));
    this.lastDate.emit(dateQuote);
    console.log(this.datePipe.transform(this.date, 'yyyy-MM-dd'));
    console.log(this.datePipe.transform(this.date1, 'yyyy-MM-dd'));
   /* const params = {
      'startDate': this.datePipe.transform(this.date1, 'yyyy-MM-dd'),
      'endDate': this.datePipe.transform(this.date, 'yyyy-MM-dd')
    };
    this.http.get('http://localhost:8080/stat_finance_income_param', {params: params}).subscribe( res => {
      this.fath.dataSet = Object.values(res);
      console.log(this.fath.dataSet);
    });*/
  }
}
export class StartAndEndDate {
  constructor(public startTime: String, public endTime: String) {
  }
}

