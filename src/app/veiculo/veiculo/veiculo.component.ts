import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Veiculo } from './../model/veiculo';
import { VeiculoService } from './../services/veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  veiculo$: Observable<Veiculo[]>;
  colunasExibidas = ['cliente', 'cpf_cnpj', 'placa', 'tipo'];

  constructor(private veiculoService: VeiculoService,
    public dialog: MatDialog) {
      this.veiculo$ = this.veiculoService.list()
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
