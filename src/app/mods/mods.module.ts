import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponentComponent } from './mods-home-component/mods-home-component.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';


@NgModule({
  declarations: [
    ModsHomeComponentComponent,
    ModalComponentComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
