import { Component, OnInit } from '@angular/core';
import { MyDatePickerHeaderComponent } from './my-date-picker-header.component';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent implements OnInit {

  datePickerHeader = MyDatePickerHeaderComponent;

  startDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
