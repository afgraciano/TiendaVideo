import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Pais } from 'src/app/entidades/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {

  public textoBusqueda: string = "";
  public paises: Pais[] = [];
  public columnas = [
    { name: 'Código', prop: 'id' },
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Código Alfa 2', prop: 'codigoAlfa2' },

    { name: 'Código Alfa 3', prop: 'codigoAlfa3' },
  ];

  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;



  constructor(private paisService: PaisService,
    private dialogService: MatDialog,

  ) {

  }

  ngOnInit(): void {
    this.listar();

  }

  private listar() {
    this.paisService.listar().subscribe(
      respuesta => {
        this.paises = respuesta;
      },
      error => {
        window.alert(error.message)
      }
    );
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


