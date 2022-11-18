import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http:HttpClient
  ) {

  }

  obtenerUsuarios():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`);
  }

  agregarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.api}/usuarios`, usuario);
  }

  editarUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(`${environment.api}/usuarios/${usuario.id}`, usuario)
  }

  eliminarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.delete<Usuario>(`${environment.api}/usuarios/${usuario.id}`);
  }
}
