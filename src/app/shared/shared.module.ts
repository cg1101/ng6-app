import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MyDatePickerModule } from './my-date-picker/my-date-picker.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MyDatePickerModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    MyDatePickerModule,
  ],
})
export class SharedModule { }
