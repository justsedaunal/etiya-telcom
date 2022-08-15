import { ServiceFormComponent } from '../components/service-form/service-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add',component:ServiceFormComponent},
  { path:'update-service/:id',component:ServiceFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
