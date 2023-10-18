import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpresasModule } from './componentes/empresas/empresas.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmpresasModule  //para carga perezosa o carga por demanda lazzy load
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
