import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs/operators';
import { Cliente } from './../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'cliente';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(cliente => console.log(cliente))
    );
  }
}
