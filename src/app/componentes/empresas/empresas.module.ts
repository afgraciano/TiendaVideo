import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './paginas/empresas/empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';



@NgModule({
  declarations: [EmpresasComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
  ]
})
export class EmpresasModule { }
