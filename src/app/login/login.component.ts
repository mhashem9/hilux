import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { RowField } from '../fields/field_order';
import { FieldsService } from '../shared/fields.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response$: Observable<any>;
  formData: any = {};

  @ViewChild('app-field') field;
  @ViewChild('rowReference') rowReference: ElementRef;
  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private fieldsService: FieldsService,
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient,
    private toastr: ToastrService,
    private ngxSmartModalService: NgxSmartModalService,
    ) { }

  ngOnInit(): void {
    // this.response$ = this.fieldsService.getUrl('http://192.168.0.150:3000/login');
  }

  login(formData: any) {
    // this.authenticationService.signin();
    // this.router.navigate(['/']);
    let fd = new FormData();
    fd.append('data', JSON.stringify(formData));
    this.http.post(`${environment.apiHost}/AjmanLandProperty/index.php/applications/loginAPI`, fd)
    .subscribe((data: any) =>{
      if (data.status == 'success') {
        this.toastr.success(data.message, 'Success');
        this.router.navigate(['my_tasks']);
        // this.response = data.data;
      } else {
        this.toastr.error(data.message, 'Error')
      }
    })
  }
  forgetPasswordFun() {
    this.ngxSmartModalService.getModal('addBlockToOwnerPropertiesModal').open();
  }
  sendPasswordLinkToMail(formData: any){
    if(! formData.email) return;
    console.log(formData.email);
    this.ngxSmartModalService.getModal('addBlockToOwnerPropertiesModal').close();
  }


  logout() {
    this.authenticationService.signout();
  };

  getClass(classname: string, field: RowField) {
    return classname + this.fieldsService.getFieldWidth(field.fieldWidth)
  }

  getFormDatafor(row: any, index?: any) {
    if (row.allowMultiple) {
      this.formData[row.row] ? this.formData[row.row] : (this.formData[row.row] = [{}])
    } else {
      this.formData[row.row] ? this.formData[row.row] : (this.formData[row.row] = {})
    }
    return this.formData[row.row];
  }

  addRow(row, index) {
    console.log('add row', row);
    this.formData[row.row].push({});
  }

  getrowId(row: any) {
    return `${row.row}`;
  }

  getsubrowId(subRow) {
    // return `${subRow.row}`;
  }

  deleteRow(row, index) {
    _.remove(this.formData[row.row], function(resource, i) {
        return index === i;
    });
  }


  ngAfterViewInit () {
    this.changeDetector.detectChanges();
  }
}
