import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModuComponent } from './modu/modu.component';

@NgModule({
  declarations: [ModuComponent],
  imports: [
    CommonModule,
    ModulosRoutingModule
  ]
})
export class ModulosModule { }
