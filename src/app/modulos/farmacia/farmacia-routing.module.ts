import { VentasComponent } from './ventas/ventas.component';
import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'ventas', component:VentasComponent},
  {path:'delivery', loadChildren:'./delivery/delivery.module#DeliveryModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
