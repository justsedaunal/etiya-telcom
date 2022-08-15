import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CoreModule } from '../core/core.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ListSkeletonComponent } from './components/list-skeleton/list-skeleton.component';
import {TableModule} from 'primeng/table';
import { CoreRoutingModule } from '../core/core-routing-module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    ListSkeletonComponent
  ],
  imports: [
    CommonModule,CoreModule,SkeletonModule,TableModule,CoreRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent,ListSkeletonComponent
  ]
})
export class SharedModule { }
