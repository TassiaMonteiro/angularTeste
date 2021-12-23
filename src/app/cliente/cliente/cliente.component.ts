import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Cliente } from './../model/cliente';
import { ClienteService } from './../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente$: Observable<Cliente[]>;

  colunasExibidas = ['nome', 'documento', 'rg', 'endereco', 'bairro', 'cidade', 'celular'];

  constructor( private clienteService: ClienteService, public dialog: MatDialog) {
    this.cliente$ = this.clienteService.list()
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
