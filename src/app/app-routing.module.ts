import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
import { SignupComponent } from './signup/signup.component';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { ServiceIdResolver } from './service-id.resolver';
import { ServicePageComponent } from './service-page/service-page.component';
import { StepIdResolver } from './stepId.resolver';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AuthenticationGuard } from './authentication.guard';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ProjectProfileComponent } from './project-profile/project-profile.component';
import { UnitProfileComponent } from './unit-profile/unit-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CustomerProfileResolver } from './customer-profile.resolver';
import { CustomerDetailsComponent } from './customer-profile/customer-details/customer-details.component';
import { ProjectProfileResolver } from './shared/project-profile.resolver';
import { UnitProfileResolver } from './shared/unit-profile.resolver';
import { CompanyProfileResolver } from './shared/company-profile.resolver';
import { UnitDetailsComponent } from './unit-profile/unit-details/unit-details.component';
import { ProjectDetailsComponent } from './project-profile/project-details/project-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CompanyDetailsComponent } from './company-profile/company-details/company-details.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { OwnerProfileResolver } from './shared/owner-profile.resolver';
import { PropertiesProfileResolver } from './shared/properties-profile.resolver';
import { PropertiesProfileComponent } from './properties-profile/properties-profile.component';
import { LandProfileComponent } from './land-profile/land-profile.component';
import { LandDetailsComponent } from './land-profile/land-details/land-details.component';
import { LandProfileResolver } from './shared/land-profile.resolver';
import { SearchPageComponent } from './search-page/search-page.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { DeveloperProfileResolver } from './shared/developer-profile.resolver';
import { DeveloperDetailsComponent } from './developer-profile/developer-details/developer-details.component';
import { LegalBlocksComponent } from './legal-blocks/legal-blocks.component';
import { EngineeringBlocksComponent } from './engineering-blocks/engineering-blocks.component';
import { ApplicationSearchComponent } from './application-search/application-search.component';
import { UnitsExcelUploadComponent } from './units-excel-upload/units-excel-upload.component';
import { SingleApplicationSearchComponent } from './single-application-search/single-application-search.component';
import { ApplicationSearchResolver } from './shared/application_search.resolver';
import { UnitsValuationComponent } from './units-valuation/units-valuation.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [AuthenticationGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'ResetPassword/:id',  component: ResetPasswordComponent },
  // { path: 'signup',  component: SignupComponent },
  { path: 'error',  component: ErrorPageComponent },
  { path: 'custom_page',  component: CustomPageComponent, canActivate: [AuthenticationGuard] },
  { path: 'my_tasks',  component: MyTasksComponent, canActivate: [AuthenticationGuard] },
  { path: 'rule_generator',  component: RuleGeneratorComponent, canActivate: [AuthenticationGuard] },
  { path: 'service/:serviceId', component: ServicePageComponent, resolve: { serviceId: ServiceIdResolver} , canActivate: [AuthenticationGuard]},
  { path: 'notifications/:stepId', component: NotificationPageComponent, resolve: { stepId: StepIdResolver}, canActivate: [AuthenticationGuard]},
  { path: 'customer/new', component: CustomerProfileComponent, resolve: { profile: CustomerProfileResolver}, canActivate: [AuthenticationGuard] },
  { path: 'customer/profile/:profileId', component: CustomerProfileComponent,
    resolve: { profile: CustomerProfileResolver},
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: CustomerDetailsComponent }
    ]
  },
  { path: 'project/new', component: ProjectProfileComponent, resolve: { profile: ProjectProfileResolver}, canActivate: [AuthenticationGuard] },
  { path: 'project/profile/:profileId', component: ProjectProfileComponent,
    resolve: { profile: ProjectProfileResolver}, canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: ProjectDetailsComponent }
    ]
  },
  { path: 'unit/new', component: UnitProfileComponent, resolve: { profile: UnitProfileResolver}, canActivate: [AuthenticationGuard] },
  { path: 'unit/profile/:profileId', component: UnitProfileComponent,
    resolve: { profile: UnitProfileResolver},
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: UnitDetailsComponent }
    ]
  },
  { path: 'company/new', component: CompanyProfileComponent, resolve: { profile: CompanyProfileResolver}, canActivate: [AuthenticationGuard] },
  { path: 'company/profile/:profileId', component: CompanyProfileComponent,
    resolve: { profile: CompanyProfileResolver},
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: CompanyDetailsComponent }
    ]
  },
  { path: 'land/new', component: LandProfileComponent, resolve: { profile: LandProfileResolver} , canActivate: [AuthenticationGuard] },
  { path: 'land/profile/:profileId', component: LandProfileComponent,
    resolve: { profile: LandProfileResolver},
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: LandDetailsComponent }
    ]
  },
  { path: 'developer/new', component: DeveloperProfileComponent, resolve: { profile: DeveloperProfileResolver}, canActivate: [AuthenticationGuard] },
  { path: 'developer/profile/:profileId', component: DeveloperProfileComponent,
    resolve: { profile: DeveloperProfileResolver},
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: DeveloperDetailsComponent }
    ]
  },
  { path: 'owner/profile/:profileId/edit', component: OwnerProfileComponent,
    resolve: { profile: OwnerProfileResolver},
    canActivate: [AuthenticationGuard]
  },
  { path: 'properties/profile/:profileId/edit', component: PropertiesProfileComponent,
    resolve: { profile: PropertiesProfileResolver},
    canActivate: [AuthenticationGuard]
  },
  { path: 'search', component: SearchPageComponent, canActivate: [AuthenticationGuard] },
  { path: 'legal_blocks', component: LegalBlocksComponent, canActivate: [AuthenticationGuard] },
  { path: 'engineering_blocks', component: EngineeringBlocksComponent, canActivate: [AuthenticationGuard] },
  { path: 'application_search', component: ApplicationSearchComponent, canActivate: [AuthenticationGuard] },
  { path: 'units_excel_upload', component: UnitsExcelUploadComponent, canActivate: [AuthenticationGuard] },
  { path: 'application_search/:applicationId', component: SingleApplicationSearchComponent, canActivate: [AuthenticationGuard], resolve: { application_search: ApplicationSearchResolver } },
  { path: 'units_valuation', component: UnitsValuationComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule],
  providers: [
    StepIdResolver,
    ServiceIdResolver,
    CustomerProfileResolver,
    ProjectProfileResolver,
    UnitProfileResolver,
    CompanyProfileResolver,
    OwnerProfileResolver,
    PropertiesProfileResolver,
    LandProfileResolver,
    DeveloperProfileResolver,
    ApplicationSearchResolver
  ]
})
export class AppRoutingModule { }
