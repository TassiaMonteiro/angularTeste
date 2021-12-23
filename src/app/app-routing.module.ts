import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },

  { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) },

  { path: 'veiculo', loadChildren: () => import('./veiculo/veiculo.module').then(m => m.VeiculoModule) },

  { path: 'protocolo', loadChildren: () => import('./protocolo/protocolo.module').then(m => m.ProtocoloModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
