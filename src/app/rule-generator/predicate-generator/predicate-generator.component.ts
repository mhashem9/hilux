import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { isArray } from 'util';

@Component({
  selector: 'app-predicate-generator',
  templateUrl: './predicate-generator.component.html',
  styleUrls: ['./predicate-generator.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class PredicateGeneratorComponent implements OnInit {
  predicateType: string = 'condition';

  dataOptions: any = [
    {id: 'condition', name: 'Condition'},
    {id: 'or', name: 'Or'},
    {id: 'and', name: 'And'}
  ]

  typeOptions: any = [
    {id: 'in', name: 'in'},
    {id: '=', name: '='},
    {id: '!=', name: '!='},
    {id: '<', name: '<'},
    {id: '<=', name: '<='},
    {id: '>', name: '>'},
    {id: '>=', name: '>='},
    {id: 'like', name: 'like'}
  ]

  @Input() key: string;
  @Input() formData: any;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  addRow() {
    if (this.formData[this.key]) {
      this.formData[this.key] = Object.assign({}, this.formData[this.key], this.blankPredicateData());
    }
  }

  deleteRow(deletekey) {
    _.unset(this.formData[this.key], deletekey);
  }

  ngAfterViewInit () {
    this.changeDetector.detectChanges();
  }

  blankPredicateData() {
    let data = {};
    if (this.predicateType == 'condition') {
      data = Object.assign({}, data, { condition: { type: '=', data: {} } })
    } else if(this.predicateType == 'and') {
      data = Object.assign({}, data, { and: [] })
    } else {
      data = Object.assign({}, data, { or: [] })
    }

    return data;
  }

  isEnumerator(data: any) {
    return isArray(data);
  }

}
