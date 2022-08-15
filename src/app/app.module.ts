import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';

import {HttpClientModule} from '@angular/common/http';
import { MessageService } from 'primeng/api'

import {NgxPaginationModule} from 'ngx-pagination';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    NgxPaginationModule,
    CoreModule




  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
