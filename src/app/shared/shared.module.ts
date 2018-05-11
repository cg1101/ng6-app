import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDatePickerModule } from './my-date-picker/my-date-picker.module';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    MyDatePickerModule,
  ],
})
export class SharedModule { }
