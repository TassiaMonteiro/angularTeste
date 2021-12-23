import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'usuario';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.API)
   /* .pipe(
      first(),
      //delay(5000),
      tap(usuario => console.log(usuario))
    )*/;
  }
}
