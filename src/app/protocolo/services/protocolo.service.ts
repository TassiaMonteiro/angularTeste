import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Protocolo } from './../model/protocolo';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {

  private readonly API = 'protocolo';

  constructor(private httpClient: HttpClient) {}

    list() {
      return this.httpClient.get<Protocolo[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(protocolo => console.log(protocolo))
      );
    }
  }

