import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dateInput = null;

  constructor() { }

  ngOnInit() {
  }

  dateChanged(newDate) {
    console.log('newDate is', newDate);
  }

}
