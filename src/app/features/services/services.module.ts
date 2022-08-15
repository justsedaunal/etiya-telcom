import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceFormComponent } from '../components/service-form/service-form.component';
import { ServiceDashboardComponent } from '../components/service-dashboard/service-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ServiceFormComponent,
    ServiceDashboardComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule, ReactiveFormsModule, SharedModule,CoreModule
  ],
  exports: [
    ServiceDashboardComponent
  ]
})
export class ServicesModule { }
