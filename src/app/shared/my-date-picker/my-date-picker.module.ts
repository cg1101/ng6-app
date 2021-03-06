import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule, MatIconModule, DateAdapter, MAT_DATE_FORMATS} from '@angular/material';

import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { CustomDateAdapter } from './my-custom-adapter';

import { MyDatePickerComponent } from './my-date-picker.component';
import { MyDatePickerHeaderComponent } from './my-date-picker-header.component';

const MY_DATE_FORMATS = {
  display: 'MMM'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
  ],
  declarations: [
    MyDatePickerComponent,
  ],
  providers: [
    // {provide: DateAdapter, useValue: CustomDateAdapter},
    // {provide: DateAdapter, useValue: MomentDateAdapter},
    // {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
  entryComponents: [
    MyDatePickerHeaderComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MyDatePickerComponent,
  ],
})
export class MyDatePickerModule { }
