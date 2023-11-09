import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



export interface DatosDecidir {
  titulo: string;
  mensaje: string;
  id: number;
}

@Component({
  selector: 'app-decidir',
  templateUrl: './decidir.component.html',
  styleUrls: ['./decidir.component.css']
})
export class DecidirComponent {

  @Input() public dialogRef = MatDialogRef<DecidirComponent>;
  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public datos: DatosDecidir
  ) {

  }

}
