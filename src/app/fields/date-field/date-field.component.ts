import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../fields';
import { ControlContainer, NgForm } from '@angular/forms';
import { FieldsService } from 'src/app/shared/fields.service';
import { end } from '@popperjs/core';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DateFieldComponent implements OnInit {

  @Input() field: Field;

  @Input() customClass: string = 'test';

  @Input() formData: any;

  @Input() row: any;

  @Input() index: any = 0;

  @Input() fullFormData: any;

  @Input() formErrors: any;

  @Input() defaultValues: any;
  plusYear: string;
  plusMonth: string;
  constructor(private service: FieldsService) { }
  ngOnInit(): void {
    this.getDefaultValue(this.field.fieldID);
  }
  getControlClass() {
    switch (this.field.auxInfo.type.toLowerCase()) {
      case 'date-range':
        return 'date-range-picker';
      case 'date-time':
        return 'date-time-picker';
      case 'time':
        return 'time-picker';
      default:
        return 'datepicker';
    }
  }
  getTargetname(field_name: string) {
    return `#${field_name}`;
  }
  getText(field: any, key: string) {
    return this.service.getText(field, key);
  }
  showErrors(field_name: any) {
    return this.service.showErrors(field_name, this.formErrors);
  }
  getErrors(field_name: any) {
    return this.service.getErrors(field_name, this.formErrors);
  }
  getName(field_name) {
    return this.service.getFieldName(field_name, this.row, this.index)
  }
  getDefaultValue(field_name: any) {
    const value = this.service.getDefaultValue(field_name, this.defaultValues, this.index);
    if (value) {
      this.formData[this.field.fieldID] = new Date(value);
    }
  }
  isRequired() {
    return this.service.isRequired(this.field.required, this.field.fieldID);
  }
  formatDate(name: any) {
    this.formData[name] = this.service.formatDate(this.formData, name);
    if (name == 'startDate' && this.field['startDate']) {
      this.service.setDatesValues(this.field['startDate'], this.formData[name]);
      const datesValues = this.service.getDatesValues();
      console.log(datesValues);
    }
  }
  addFun(val: string, id: string) {
    console.log('add fun ' + id);
    const datesValues = this.service.getDatesValues();
    const obj = datesValues.filter(e => {
      return e.group == val;
    });
    if (obj.length > 0) {
      const startDate = obj[0].value;
      console.log('start date  =' + obj[0].value);
      var date = new Date(startDate);
      var newDate = new Date(date);
      if (this.plusYear) {
        this.formData['Year'] =this.plusYear;
        newDate = new Date(newDate.setFullYear(date.getFullYear() + parseInt(this.plusYear)));
      }else{
        delete this.formData['Year'];
      }
      if (this.plusMonth) {
        this.formData['Month'] =this.plusMonth;
        newDate = new Date(newDate.setMonth(date.getMonth() + parseInt(this.plusMonth)));
      }
      else{
        delete this.formData['Month'];
      }
      var endDateModel = newDate || 'yyyy-MM-dd';
      this.formData[id] = endDateModel;
      console.log("end date " + endDateModel);
    } else {
      var date = new Date();
      var newDate = new Date(date);
      if (this.plusYear)  {
        this.formData['Year'] =this.plusYear;
        newDate =new Date(newDate.setFullYear(date.getFullYear() + parseInt(this.plusYear)));
       }else{
        delete this.formData['Year'];
      }
      if (this.plusMonth) {
        this.formData['Month'] =this.plusMonth;
        newDate = new Date(newDate.setMonth(date.getMonth() + parseInt(this.plusMonth)));
      } else{
        delete this.formData['Month'];
      }
      var endDateModel = newDate || 'yyyy-MM-dd';
      this.formData[id] = endDateModel;
      console.log("end date " + endDateModel);
    }

  }
  formatDateTime(name: any) {
    this.formData[name] = this.service.formatDate(this.formData, name, 'yyyy-MM-dd hh:mm a');
  }
  getFieldType() {
    return this.field.auxInfo && this.field.auxInfo.type && this.field.auxInfo.type.toLowerCase();
  }
  getDate(date: any) {
    if (!!date)
      return new Date(date);
    else
      return null
  }
  isActiveEditStep() {
    return this.service.isEditStep && (this.service.editStepField != this.field.fieldID);
  }
}
