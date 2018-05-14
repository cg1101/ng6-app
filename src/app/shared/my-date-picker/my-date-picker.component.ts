import {Component, ViewChild, ElementRef, HostBinding, AfterViewInit} from '@angular/core';
import {MyDatePickerHeaderComponent} from './my-date-picker-header.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatDatepicker} from '@angular/material';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent implements AfterViewInit {

  datePickerHeader = MyDatePickerHeaderComponent;
  startDate = new Date();
  isOpened = false;

  @ViewChild('picker', {read: MatDatepicker}) datePicker: MatDatepicker;

  @HostBinding('class.open')
  get isDatepickerOpen() {
    return this.datePicker && this.datePicker.opened;
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('calendar',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/calendar.svg'));
    iconRegistry.addSvgIcon('down',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/down.svg'));
    iconRegistry.addSvgIcon('up',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/up.svg'));
  }

  ngAfterViewInit() {
    // this.isOpened = this.datePicker.opened;
  }

  toggleDatePicker() {
    console.log('toggle date picker', this.datePicker, 'isOpened', this.datePicker.opened, 'isOpened', this.isOpened);
    // debugger
    if (this.isDatepickerOpen) {
      this.datePicker.opened = false;
    } else {
      this.datePicker.open();
    }
  }
}
