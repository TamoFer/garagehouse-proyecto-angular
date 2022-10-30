import { Sesion } from '../../models/sesion';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

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

  login(usuario:Usuario) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
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
