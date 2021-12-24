import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Veiculo } from './../model/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly API = 'api/veiculo';

  constructor(private httpClient: HttpClient) {}

    list() {
      return this.httpClient.get<Veiculo[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(veiculo => console.log(veiculo))
      );
    }
  }

