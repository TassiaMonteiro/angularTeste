import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Usuario } from './../model/usuario';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario$: Observable<Usuario[]> = new Observable<Usuario[]> ();
  colunasExibidas = ['nome', 'login', 'email'];

  constructor(
    private usuarioService: UsuarioService,
    public dialog: MatDialog) {
    this.usuario$ = this.usuarioService.list()
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
