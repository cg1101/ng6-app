import {NativeDateAdapter} from '@angular/material';

export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getFullYear();
      // Return the format as per your requirement
      return `${year}-${month}-${day}`;
    } else {
      return date.toDateString();
    }
  }

  // If required extend other NativeDateAdapter methods.
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};
