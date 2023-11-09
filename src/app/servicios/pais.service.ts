import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pais } from '../entidades/pais';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.urlAPI}paises`;
  }

  public listar(): Observable<Pais[]> {
    const urlT = `${this.url}/listar`;
    return this.http.get<Pais[]>(urlT);
  }
}
