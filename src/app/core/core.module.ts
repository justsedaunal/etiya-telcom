import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumratePipe } from './pipes/enumrate.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoginComponent } from './auth/pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EnumratePipe,
    PaginationPipe,
    LoaderComponent,
    LoginComponent

  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    EnumratePipe,
    PaginationPipe,LoaderComponent

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
})
export class CoreModule { }
