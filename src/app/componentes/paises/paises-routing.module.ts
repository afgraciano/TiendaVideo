
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './paginas/pais/pais.component';


const routes: Routes = [
    { path: '', component: PaisComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaisesRoutingModule { }
