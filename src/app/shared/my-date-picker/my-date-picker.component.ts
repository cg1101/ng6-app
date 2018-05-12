import { Component, OnInit } from '@angular/core';
import { MyDatePickerHeaderComponent } from './my-date-picker-header.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent implements OnInit {

  datePickerHeader = MyDatePickerHeaderComponent;

  startDate = new Date();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('calendar',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/calendar.svg'));
  }

  ngOnInit() {
  }

}
