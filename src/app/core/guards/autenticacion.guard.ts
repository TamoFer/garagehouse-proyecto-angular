import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from '../state/sesion.selectors';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(
    private ruta: Router,
    private store: Store<Sesion>
  ){}


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectSesionActiva).pipe(
      map((sesion: Sesion) => {
        if(sesion.sesionActiva){
          return true;
        }else{
          this.ruta.navigate(['autenticacion/login']);
          return false;
        }
      })
    );
  }

}
