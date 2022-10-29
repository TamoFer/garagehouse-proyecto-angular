import { Usuario } from './../../../models/usuario';
import { Sesion } from './../../../models/sesion';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesion$!: Observable<Sesion>;

  bd: Usuario[] = [
    {
      email: 'alumno@gmail.com',
      contrasena: 'alumno123',
      perfil: 'alumno'
    },
    {
      email: 'profesor@gmail.com',
      contrasena: 'profesor123',
      perfil: 'profesor'
    }]


  constructor() {
    const sesion: Sesion = {
      sesionActiva: false,
      usuarioActivo:{
        email: '',
        contrasena: '',
        perfil: ''
      }
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

  chequearBD(usuario:Usuario){

  }

}
