import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuComponent } from './modu/modu.component';

const routes: Routes = [
  {path:'modu', component: ModuComponent},
  {path:'', loadChildren:'./farmacia/farmacia.module#FarmaciaModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
