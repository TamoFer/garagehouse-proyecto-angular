import { HttpClient } from '@angular/common/http';
import { Sesion } from '../../models/sesion';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesion$!: Observable<Sesion>;
  usuario?:Usuario;

  constructor(
    private http: HttpClient,
    private usuariosService: UsuariosService
  ) {
    const sesion: Sesion = {
      sesionActiva: false
    };
  }

  login(usuario:Usuario): Observable<Usuario> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => u.nameUsuario === usuario.nameUsuario && u.contrasena===usuario.contrasena)[0]
      }));
  }


}
