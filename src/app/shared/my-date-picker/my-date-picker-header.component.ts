import {Component, OnDestroy, ChangeDetectorRef, Host, Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {MatCalendar, DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material';
import {Moment} from 'moment';

@Component({
  selector: 'app-my-date-picker-header',
  templateUrl: './my-date-picker-header.component.html',
  styleUrls: ['./my-date-picker-header.component.scss']
})
export class MyDatePickerHeaderComponent implements OnDestroy {

  private _ngDestroy = new Subject<void>();

  get monthLabel() {
    return this._dateAdapter
      .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  constructor(@Host() private _calendar: MatCalendar<Moment>,
              private _dateAdapter: DateAdapter<Moment>,
              @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
              cdr: ChangeDetectorRef) {
  }

  ngOnDestroy() {
    this._ngDestroy.next();
    this._ngDestroy.complete();
  }

  prev() {
    this._calendar.activeDate =
      this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1);
  }

  next() {
    this._calendar.activeDate =
      this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1);
  }
}
