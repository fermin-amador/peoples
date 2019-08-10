import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [VentasComponent],
  imports: [
    CommonModule,
    FarmaciaRoutingModule
  ]
})
export class FarmaciaModule { }
