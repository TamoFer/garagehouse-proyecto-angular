import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  constructor(
    private http:HttpClient
  ) {

  }

  getCursos():Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/Cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })
  }

  agregarCurso(curso: Curso) {
    this.http.post(`${environment.api}/Cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).subscribe()
  }

  eliminarCurso(id: number) {
    this.http.delete<Curso>(`${environment.api}/Cursos/${id}`).subscribe()
  }

  editarCurso(curso: Curso) {
    this.http.put<Curso>(`${environment.api}/Cursos/${curso.id}`, curso).subscribe()

  }

}


