import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { VeiculoRoutingModule } from './veiculo-routing.module';
import { VeiculoComponent } from './veiculo/veiculo.component';


@NgModule({
  declarations: [
    VeiculoComponent
  ],
  imports: [
    CommonModule,
    VeiculoRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class VeiculoModule { }
