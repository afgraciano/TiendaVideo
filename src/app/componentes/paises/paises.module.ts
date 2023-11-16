import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ReferenciasMaterialModule } from "src/app/referencias-material.module";
import { PaisComponent } from "./paginas/pais/pais.component";
import { PaisesRoutingModule } from "./paises-routing.module";
import { NgModule } from "@angular/core";



@NgModule({
    declarations: [PaisComponent],
    imports: [
      CommonModule,
      PaisesRoutingModule,
      ReferenciasMaterialModule,
      FormsModule,
      NgxDatatableModule
    ]
  })
  export class PaisesModule { }
  