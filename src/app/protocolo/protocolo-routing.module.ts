import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtocoloComponent } from './protocolo/protocolo.component';

const routes: Routes = [
  { path:'', component: ProtocoloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtocoloRoutingModule { }
