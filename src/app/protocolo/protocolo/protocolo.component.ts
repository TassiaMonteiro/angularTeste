import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Protocolo } from './../model/protocolo';
import { ProtocoloService } from './../services/protocolo.service';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss']
})
export class ProtocoloComponent implements OnInit {

  protocolo$: Observable<Protocolo[]>;
  colunasExibidas = ['nome_cliente', 'data_registro', 'placa', 'situacao'];

  constructor(private protocoloService: ProtocoloService,
    public dialog: MatDialog) {
      this.protocolo$ = this.protocoloService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar.');
        return of([])
      })
    );
     }

     onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

  ngOnInit(): void {
  }

}
