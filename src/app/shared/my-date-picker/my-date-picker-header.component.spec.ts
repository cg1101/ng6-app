import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDatePickerHeaderComponent } from './my-date-picker-header.component';

describe('MyDatePickerHeaderComponent', () => {
  let component: MyDatePickerHeaderComponent;
  let fixture: ComponentFixture<MyDatePickerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatePickerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDatePickerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
