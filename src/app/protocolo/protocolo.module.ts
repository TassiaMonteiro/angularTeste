import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProtocoloRoutingModule } from './protocolo-routing.module';
import { ProtocoloComponent } from './protocolo/protocolo.component';


@NgModule({
  declarations: [
    ProtocoloComponent
  ],
  imports: [
    CommonModule,
    ProtocoloRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ProtocoloModule { }
