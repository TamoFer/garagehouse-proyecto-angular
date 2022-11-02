import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate{


  constructor(
    private sesion: SesionService,
    private ruta: Router
  ){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if((sesion.usuarioActivo?.perfil)==='Profesor'){
            return true;
          }else{
            alert("No tiene permisos para acceder a este sitio");
            this.ruta.navigate(['inicio']);
            return false;
          }
        })
      );
  }


}
