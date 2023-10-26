import { Component, OnInit } from '@angular/core';
//import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable/public-api'; este me estaba sacando error
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { Empresa } from 'src/app/entidades/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  public textoBusqueda: string = "";
  public empresas: Empresa[] = [];
  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Codigo', prop: 'id' },
    { name: 'País', prop: 'pais.nombre' },
  ];
  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;

  constructor(private empresaService: EmpresaService,) {

  }

ngOnInit():void {
  this.listar();

  
}
  private listar() {
    this.empresaService.listar().subscribe(respuesta => {
        this.empresas = respuesta;
    }, error => {
        window.alert(error.message);
    });
}

  public buscar() {

  }
  public agregar() {

  }
  public modificar() {

  }
  public verificarEliminar() {

  }

  public onActivate(event: any) {

  }


}

