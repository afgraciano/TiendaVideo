import { Component, OnInit } from '@angular/core';
//import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable/public-api'; este me estaba sacando error
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Empresa } from 'src/app/entidades/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { EmpresaEditarComponent } from '../empresa-editar/empresa-editar.component';
import { Pais } from 'src/app/entidades/pais';
import { PaisService } from 'src/app/servicios/pais.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DecidirComponent } from 'src/app/componentes/decidir/decidir.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  public textoBusqueda: string = "";
  public empresas: Empresa[] = [];
  public paises: Pais[] = [];
  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Código', prop: 'id' },
    { name: 'País', prop: 'pais.nombre' },
  ];
  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;
  public empresaSeleccionada: Empresa | undefined;


  constructor(private empresaService: EmpresaService,
    private dialogService: MatDialog,
    private paisService: PaisService,
  ) {

  }

  ngOnInit(): void {
    this.listar();
    this.listarPaises();
  }

  private listar() {
    this.empresaService.listar().subscribe(
      respuesta => {
        this.empresas = respuesta;
      },
      error => {
        window.alert(error.message)
      }
    );
  }

  private listarPaises() {
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
    if (this.textoBusqueda.length > 0) {
      this.empresaService.buscar(this.textoBusqueda).subscribe(
        respuesta => {
          this.empresas= respuesta;
        },
        (error: HttpErrorResponse) => {
          window.alert(`Error buscando Empresas: [${error.message}]`);
        }
      );

    }
  }

  public agregar() {
    const dialogRef = this.dialogService.open(EmpresaEditarComponent, {
      width: '600px',
      height: '500px',
      data: {
        encabezado: "Agregando Empresa:",
        empresa: new Empresa(
          0, //id
          "", //nombre,
          new Pais(0, "", "", "")
        ),
        paises: this.paises
      }
    });

    dialogRef.afterClosed().subscribe(
      datos => {
        if (datos) {
          this.empresaService.agregar(datos.empresa).subscribe(
            respuesta => {
              this.listar();
              window.alert("Los datos de la Empresa fueron agregados");
            },
            (error: HttpErrorResponse) => {
              window.alert(`Error agregando la Empresa: [${error.message}]`);
            }
          );
        }
      }, error => {
        window.alert(error.message)
      }
    );
  }

  public modificar() {

    if (this.empresaSeleccionada) {
      const dialogRef = this.dialogService.open(EmpresaEditarComponent, {
        width: '600px',
        height: '500px',
        data: {
          encabezado: `Editando datos de la Empresa [${this.empresaSeleccionada.nombre}]`,
          empresa: this.empresaSeleccionada,
          paises: this.paises
        }
      });

      dialogRef.afterClosed().subscribe(
        datos => {
          if (datos) {
            this.empresaService.modificar(datos.empresa).subscribe(
              respuesta => {
                this.listar();
                window.alert("Los datos de la Empresa fueron modificados");
              },
              (error: HttpErrorResponse) => {
                window.alert(`Error modificando la Empresa: [${error.message}]`);
              }
            );
          }
        }, error => {
          window.alert(error.message)
        }
      );


    }
    else {
      window.alert("Debe seleccionar una Empresa");
    }

  }

  public verificarEliminar() {
    if (this.empresaSeleccionada) {
      const dialogRef = this.dialogService.open(DecidirComponent, {
        width: '400px',
        height: '200px',
        data: {
          titulo: `Eliminando registro de la Empresa [${this.empresaSeleccionada.nombre}]`,
          mensaje: "Está seguro?",
          id: this.empresaSeleccionada.id
        }
      });

      dialogRef.afterClosed().subscribe(
        datos => {
          if (datos) {
            this.empresaService.eliminar(datos.id).subscribe(
              respuesta => {
                this.listar();
                window.alert("Los datos de la Empresa fueron eliminados");
              },
              (error: HttpErrorResponse) => {
                window.alert(`Error eliminando la Empresa: [${error.message}]`);
              }
            );
          }
        }, error => {
          window.alert(error.message)
        }
      );


    }
    else {
      window.alert("Debe seleccionar una Empresa");
    }


  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.empresaSeleccionada = event.row;
    }

  }
}
