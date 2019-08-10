import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonaComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    ReactiveFormsModule
  ]
})
export class DeliveryModule { }
