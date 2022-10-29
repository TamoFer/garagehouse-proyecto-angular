import { Sesion } from '../../models/sesion';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesion$!: Observable<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.actualizarSesion(sesion)
  }

  login(email: string, contrasena: string, perfil: string) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        email: email,
        contrasena: contrasena,
        perfil: perfil
      }
    }

    this.actualizarSesion(sesion)
  }

  actualizarSesion(sesion: Sesion) {
    this.sesion$ = new Observable<Sesion>((sub) => {
      sub.next(sesion)
    })
  }

  obtenerSesion(): Observable<Sesion> {
    return this.sesion$;
  }


}
