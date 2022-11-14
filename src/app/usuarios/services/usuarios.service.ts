import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  header:HttpHeaders=new HttpHeaders({
    'content-type': 'application/json',
    'encoding': 'UTF-8'
  })

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {}

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`, {
      headers: this.header
    })
  }
}
