import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';
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

  // canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     return this.store.select(selectSesionActiva).pipe(
  //       map((sesion: Sesion) => {
  //         if(sesion.usuarioActivo?.canActivateChild){
  //           return true;
  //         }else if(childRoute.routeConfig?.path == 'listar'){
  //           return true;
  //         }else{
  //           alert("No tiene permisos para acceder a este sitio");
  //           this.router.navigate(['inicio']);
  //           return false;
  //         }
  //       })
  //     );
  // }


  // canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     return this.store.select(selectSesionActiva).pipe(
  //       map((sesion: Sesion) => {
  //         if(sesion.usuarioActivo?.canLoad){
  //           return true;
  //         }else{
  //           alert("No tiene permisos para acceder a este sitio");
  //           this.router.navigate(['inicio']);
  //           return false;
  //         }
  //       })
  //     );
  // }

}
