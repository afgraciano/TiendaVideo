import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  {
    path: 'empresas', loadChildren: () =>
      import('./componentes/empresas/empresas.module')
        .then(m => m.EmpresasModule)
  },
  {
    path: 'paises', loadChildren: () =>
      import('./componentes/paises/paises.module')
        .then(m => m.PaisesModule)
  },
  { path: "**", redirectTo: "inicio" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
