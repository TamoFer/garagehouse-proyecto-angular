import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UsuariosActions from './usuarios.actions';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';


@Injectable()
export class UsuariosEffects {

  cargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),
      concatMap(() => this.usuarios.obtenerUsuarios().pipe(
        map((u: Usuario[]) => UsuariosActions.usuariosCargados({ usuarios: u }))
      ))
    );
  });

  agregarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.agregarUsuario),
      concatMap(({ usuario }) => this.usuarios.agregarUsuario(usuario).pipe(
        map((u: Usuario) => UsuariosActions.cargarUsuarios())
      ))
    );
  });

  editarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.editarUsuario),
      concatMap(({ usuario }) => this.usuarios.editarUsuario(usuario).pipe(
        map((u: Usuario) => UsuariosActions.cargarUsuarios())
      ))
    );
  });

  eliminarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.eliminarUsuario),
      concatMap(({ usuario }) => this.usuarios.eliminarUsuario(usuario).pipe(
        map((u: Usuario) => UsuariosActions.cargarUsuarios())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private usuarios: UsuariosService
  ) { }
}
