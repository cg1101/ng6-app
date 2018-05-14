import {Component, ViewChild, ElementRef} from '@angular/core';
import { MyDatePickerHeaderComponent } from './my-date-picker-header.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatDatepicker} from '@angular/material';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent {

  datePickerHeader = MyDatePickerHeaderComponent;

  @ViewChild('picker2') datePicker: ElementRef<MatDatepicker>;

  startDate = new Date();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('calendar',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/calendar.svg'));
  }

  toggleDatePicker() {
    console.log('toggle date picker', this.datePicker);
    this.datePicker.open();
  }

}
