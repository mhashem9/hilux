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
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.response$ = this.fieldsService.getUrl('http://192.168.0.150:3000/login');
    const token = this.route.snapshot.paramMap.get('id');
    console.log(token);
  }

  resetPassword(formData: any) {
    const password = formData.password.replace(/\s/g, '');
    const confirmPassword =formData.ConfirmPassword.replace(/\s/g, '')
    const specialCharacters= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.length < 8) {
      return this.toastr.error("كلمة المرور يجب الا تقل عن ٨ آحرف \n Password must be minimum 8 characters", 'Error');
    }
    else if (password == confirmPassword ){
    // if (password < 8 ) {
    //  return this.toastr.error("كلمة المرور يجب الا تقل عن ٨ آحرف \n Password must be minimum 8 characters", 'Error');
    //  }
      if (password.search(/[a-z]/g) <0) {
      return this.toastr.error("كلمة المرور يجب ان تحتوي علي حرف صغير \n Password must contain lowercase letter", 'Error');
     }
     else if (password.search(/[A-Z]/g) <0) {
      return this.toastr.error("كلمة المرور يجب ان تحتوي علي حرف كبير \n Password must contain uppercase letter", 'Error');
     }
     else if (password.search(/[0-9]/g) <0) {
      return this.toastr.error("كلمة المرور يجب ان تحتوي علي رقم \n Password must contain number", 'Error');
     }
     else if (password.search(specialCharacters) <0) {
      return this.toastr.error("كلمة المرور يجب ان تحتوي حروف خاصة \n Password must contain special characters", 'Error');
     }
     else {
       console.log(password + " " + confirmPassword)
      // let fd = new FormData();
      // fd.append('data', JSON.stringify(formData));
      // this.http.post(`${environment.apiHost}/AjmanLandProperty/index.php/applications/loginAPI`, fd)
      //   .subscribe((data: any) => {
      //     if (data.status == 'success') {
      //       this.toastr.success(data.message, 'Success');
      //       this.router.navigate(['my_tasks']);
      //       // this.response = data.data;
      //     } else {
      //       this.toastr.error(data.message, 'Error')
      //     }
      //   })
     }
    }
    else{
      return this.toastr.error("كلمة المرور غير متطابقة \n \n Password do not match", 'Error');
    } 
 
  
  }
  forgetPasswordFun() {
    this.ngxSmartModalService.getModal('addBlockToOwnerPropertiesModal').open();
  }
  sendPasswordLinkToMail(formData: any) {
    if (!formData.email) return;
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
    _.remove(this.formData[row.row], function (resource, i) {
      return index === i;
    });
  }


  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }
}
