import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../fields';
import { FieldsService } from 'src/app/shared/fields.service';
import { ControlContainer, NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class SelectFieldComponent implements OnInit {
  dataOptions: any;
  isStepToEdit: boolean = false;

  @Input() field: Field;

  @Input() customClass: string;

  @Input() formData: any;

  @Input() row: any;

  @Input() index: any = 0;

  @Input() fullFormData: any;

  @Input() formErrors: any;

  @Input() defaultValues: any;

  constructor(private service: FieldsService, private changeDetector: ChangeDetectorRef) {
    this.service.fieldValueChanged$.subscribe(()=> {
      this.loadData()
      this.resetFieldData();
    })
  }

  ngOnInit(): void {
    this.isStepToEdit = (this.field.fieldID == 'stepToEdit');
    this.loadData();
    this.getDefaultValue(this.field.fieldID);
  }

  ngAfterViewInit () {
    this.changeDetector.detectChanges();
  }

  getFieldModelName(field: Field) {
    return this.service.getModelName(field.fieldID, this.formData);
  }

  setmyvalue(value: any) {
    console.log('value changed',value);
  }

  getText(field: any, key: string) {
    return  this.service.getText(field, key);
  }

  loadData() {
    this.dataOptions = this.service.getFieldData(this.field, this.fullFormData);
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
    this.formData[this.field.fieldID] = this.service.getDefaultValue(field_name, this.defaultValues, this.index || 0);
    if (!!this.formData[this.field.fieldID])
      this.prepareDisplayValues();
  }

  resetFieldData() {
    if (this.field.auxInfo && this.field.auxInfo.source == 'fieldValues') {
      this.service.getFieldData(this.field, this.fullFormData).subscribe((data)=> {
        const value = this.formData[this.field.fieldID];
        const exists = _.find(data, function(o) { return o.key == value; });
        if (exists) {
          // Option exists
        } else {
          this.formData[this.field.fieldID] = undefined;
        }
      })
    }
  }

  isRequired() {
    return this.service.isRequired(this.field.required, this.field.fieldID);
  }

  setDisplayValue(option: any) {
    // const x =new InputFieldComponent();
    if (this.isMultiple()) {
      this.formData[this.field.fieldID + '_displayValue'] = (option.length ? option.map(o => o.value && o.value.ar).filter(r => r) : []);
    } else {
      this.formData[this.field.fieldID + '_displayValue'] = option && option.value.ar;
    }

    if (this.isStepToEdit) {
      this.service.setSteptoEditField(option && option.key);
    }
  }

  prepareDisplayValues() {
    this.dataOptions.subscribe(data => {
      if (this.isMultiple()) {
        let defaultOption = [];
        this.formData[this.field.fieldID].forEach(element => {
          defaultOption.push(data.find(d => d.key == element));
        });
        defaultOption = defaultOption.filter(r => r);
        if (defaultOption.length) {
          this.setDisplayValue(defaultOption);
        }
      } else {
        let defaultOption = data.find(d => d.key == this.formData[this.field.fieldID]);
        if (!!defaultOption) {
          this.setDisplayValue(defaultOption);
        }
      }
    })
  }

  isMultiple() {
    return ((this.field.auxInfo && this.field.auxInfo.multiple) ? this.service.isMultiple(this.field.auxInfo.multiple) : false);
  }

  isEntityName() {
    return !this.isMultiple() && (this.field.auxInfo && !!this.field.auxInfo.entityName)
  }

  getViewResourceUrl() {
    let resourceName = this.field.auxInfo && this.field.auxInfo.entityName
    return `/${resourceName}/profile/${this.formData[this.field.fieldID]}/edit`;
  }

  isActiveEditStep() {
    return this.isStepToEdit ? false : (this.service.isEditStep && (this.service.editStepField != this.field.fieldID));
  }
}
