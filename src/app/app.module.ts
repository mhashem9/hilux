import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
import { SignupComponent } from './signup/signup.component';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { TextAreaFieldComponent } from './fields/text-area-field/text-area-field.component';
import { AutocompleteFieldComponent } from './fields/autocomplete-field/autocomplete-field.component';
import { DateFieldComponent } from './fields/date-field/date-field.component';
import { NumberFieldComponent } from './fields/number-field/number-field.component';
import { LabelComponent } from './tags/label/label.component';
import { HeadingComponent } from './tags/heading/heading.component';
import { FieldComponent } from './fields/field/field.component';
import { FileUploadComponent } from './fields/file-upload/file-upload.component';
import { RadioButtonFieldComponent } from './fields/radio-button-field/radio-button-field.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CurrencyFieldComponent } from './fields/currency-field/currency-field.component';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { EntitySelectComponent } from './fields/entity-select/entity-select.component';
import { StepSelectComponent } from './fields/step-select/step-select.component';
import { DisplayFieldsComponent } from './tags/display-fields/display-fields.component';
import { DisplayImageComponent } from './tags/display-image/display-image.component';
import { DisplayImageGroupComponent } from './tags/display-image-group/display-image-group.component';
import { DisplayPdfComponent } from './tags/display-pdf/display-pdf.component';
import { DisplayPdfGalleryComponent } from './tags/display-pdf-gallery/display-pdf-gallery.component';
import { DisplayTableComponent } from './tags/display-table/display-table.component';
import { DisplayFieldDataComponent } from './tags/display-field-data/display-field-data.component';
import { DisplayFieldGroupComponent } from './tags/display-field-group/display-field-group.component';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { FormComponent } from './form/form.component';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { CommitDataGeneratorComponent } from './rule-generator/commit-data-generator/commit-data-generator.component';
import { StartCriteriaGeneratorComponent } from './rule-generator/start-criteria-generator/start-criteria-generator.component';
import { EndCriteriaGeneratorComponent } from './rule-generator/end-criteria-generator/end-criteria-generator.component';
import { ValuesGeneratorComponent } from './rule-generator/commit-data-generator/values-generator/values-generator.component';
import { PredicateGeneratorComponent } from './rule-generator/predicate-generator/predicate-generator.component';
import { OrPredicateGeneratorComponent } from './rule-generator/or-predicate-generator/or-predicate-generator.component';
import { AndPredicateGeneratorComponent } from './rule-generator/and-predicate-generator/and-predicate-generator.component';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { ValueGeneratorComponent } from './rule-generator/value-generator/value-generator.component';
import { DataInGeneratorComponent } from './rule-generator/data-in-generator/data-in-generator.component';
import { FieldsGeneratorComponent } from './rule-generator/data-in-generator/fields-generator/fields-generator.component';
import { FieldOrderGeneratorComponent } from './rule-generator/data-in-generator/field-order-generator/field-order-generator.component';
import { RowFieldsComponent } from './rule-generator/data-in-generator/field-order-generator/row-fields/row-fields.component';
import { DropdownValuesComponent } from './rule-generator/data-in-generator/fields-generator/dropdown-values/dropdown-values.component';
import { FieldGeneratorComponent } from './rule-generator/end-criteria-generator/field-generator/field-generator.component';
import { DataDisplayGeneratorComponent } from './rule-generator/data-display-generator/data-display-generator.component';
import { ImageGeneratorComponent } from './rule-generator/data-display-generator/image-generator/image-generator.component';
import { TableGeneratorComponent } from './rule-generator/data-display-generator/table-generator/table-generator.component';
import { DisplayFieldGeneratorComponent } from './rule-generator/data-display-generator/display-field-generator/display-field-generator.component';
import { DisplayKeysGeneratorComponent } from './rule-generator/data-display-generator/display-keys-generator/display-keys-generator.component';
import { ImageGalleryGeneratorComponent } from './rule-generator/data-display-generator/image-gallery-generator/image-gallery-generator.component';
import { FieldGroupGeneratorComponent } from './rule-generator/data-display-generator/field-group-generator/field-group-generator.component';
import { HeaderGeneratorComponent } from './rule-generator/data-display-generator/table-generator/header-generator/header-generator.component';
import { BodyGeneratorComponent } from './rule-generator/data-display-generator/table-generator/body-generator/body-generator.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { AuthInterceptor } from './AuthInterceptor';
import { ToastrModule } from 'ngx-toastr';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AjaxButtonComponent } from './fields/ajax-button/ajax-button.component';
import { DisplayLinkComponent } from './tags/display-link/display-link.component';
import { DisplayButtonComponent } from './tags/display-button/display-button.component';
import { DisplayButtonGroupComponent } from './tags/display-button-group/display-button-group.component';
import { DisplayLinkGroupComponent } from './tags/display-link-group/display-link-group.component';
import { AuthenticationGuard } from './authentication.guard';
import { DisplayDataFormGeneratorComponent } from './display-data-form-generator/display-data-form-generator.component';
import { HiddenFieldComponent } from './fields/hidden-field/hidden-field.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDetailsComponent } from './customer-profile/customer-details/customer-details.component';
import { ProjectProfileComponent } from './project-profile/project-profile.component';
import { UnitProfileComponent } from './unit-profile/unit-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { UnitDetailsComponent } from './unit-profile/unit-details/unit-details.component';
import { ProjectDetailsComponent } from './project-profile/project-details/project-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CompanyDetailsComponent } from './company-profile/company-details/company-details.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PropertiesProfileComponent } from './properties-profile/properties-profile.component';
import { LandProfileComponent } from './land-profile/land-profile.component';
import { LandDetailsComponent } from './land-profile/land-details/land-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { DeveloperDetailsComponent } from './developer-profile/developer-details/developer-details.component';
import { LegalBlocksComponent } from './legal-blocks/legal-blocks.component';
import { EngineeringBlocksComponent } from './engineering-blocks/engineering-blocks.component';
import { ApplicationSearchComponent } from './application-search/application-search.component';
import { UnitsExcelUploadComponent } from './units-excel-upload/units-excel-upload.component';
import { SingleApplicationSearchComponent } from './single-application-search/single-application-search.component';
import { UnitsValuationComponent } from './units-valuation/units-valuation.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
	  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ResetPasswordComponent,
    SignupComponent,
    InputFieldComponent,
    SelectFieldComponent,
    TextAreaFieldComponent,
    AutocompleteFieldComponent,
    DateFieldComponent,
    NumberFieldComponent,
    LabelComponent,
    HeadingComponent,
    FieldComponent,
    FileUploadComponent,
    RadioButtonFieldComponent,
    CurrencyFieldComponent,
    CheckboxFieldComponent,
    EntitySelectComponent,
    StepSelectComponent,
    DisplayFieldsComponent,
    DisplayImageComponent,
    DisplayImageGroupComponent,
    DisplayPdfComponent,
    DisplayPdfGalleryComponent,
    DisplayTableComponent,
    DisplayFieldDataComponent,
    DisplayFieldGroupComponent,
    CustomPageComponent,
    FormComponent,
    RuleGeneratorComponent,
    CommitDataGeneratorComponent,
    StartCriteriaGeneratorComponent,
    EndCriteriaGeneratorComponent,
    ValuesGeneratorComponent,
    PredicateGeneratorComponent,
    OrPredicateGeneratorComponent,
    AndPredicateGeneratorComponent,
    ValueGeneratorComponent,
    DataInGeneratorComponent,
    FieldsGeneratorComponent,
    FieldOrderGeneratorComponent,
    RowFieldsComponent,
    DropdownValuesComponent,
    FieldGeneratorComponent,
    DataDisplayGeneratorComponent,
    ImageGeneratorComponent,
    TableGeneratorComponent,
    DisplayFieldGeneratorComponent,
    DisplayKeysGeneratorComponent,
    ImageGalleryGeneratorComponent,
    FieldGroupGeneratorComponent,
    HeaderGeneratorComponent,
    BodyGeneratorComponent,
    ServicePageComponent,
    NotificationPageComponent,
    MyTasksComponent,
    AjaxButtonComponent,
    DisplayLinkComponent,
    DisplayButtonComponent,
    DisplayButtonGroupComponent,
    DisplayLinkGroupComponent,
    DisplayDataFormGeneratorComponent,
    HiddenFieldComponent,
    CustomerProfileComponent,
    CustomerDetailsComponent,
    ProjectProfileComponent,
    UnitProfileComponent,
    CompanyProfileComponent,
    UnitDetailsComponent,
    ProjectDetailsComponent,
    ErrorPageComponent,
    CompanyDetailsComponent,
    OwnerProfileComponent,
    AlertsComponent,
    PropertiesProfileComponent,
    LandProfileComponent,
    LandDetailsComponent,
    SearchPageComponent,
    DeveloperProfileComponent,
    DeveloperDetailsComponent,
    LegalBlocksComponent,
    EngineeringBlocksComponent,
    ApplicationSearchComponent,
    UnitsExcelUploadComponent,
    SingleApplicationSearchComponent,
    UnitsValuationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PrettyJsonModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-left'}),
    DataTablesModule,
    NgxMaskModule.forRoot(maskConfig),

  ],
  providers: [
    AuthenticationGuard,
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ar'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
