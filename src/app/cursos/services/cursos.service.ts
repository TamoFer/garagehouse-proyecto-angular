import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  header:HttpHeaders=new HttpHeaders({
    'content-type': 'application/json',
    'encoding': 'UTF-8'
  })

  constructor(
    private http:HttpClient
  ) {

  }

  obtenerCursos(){
    return this.http.get('https://635b2514aa7c3f113db69e87.mockapi.io/Cursos');
  }

  getCursos():Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/Cursos`, {
      headers: this.header
    })
  }

  agregarCurso(curso: Curso) {
    this.http.post(`${environment.api}/Cursos/`, curso, {
      headers: this.header
    }).subscribe()
  }

  eliminarCurso(id: number) {
    this.http.delete<Curso>(`${environment.api}/Cursos/${id}`).subscribe()
  }

  editarCurso(curso: Curso) {
    this.http.put<Curso>(`${environment.api}/Cursos/${curso.id}`, curso).subscribe()

  }

}


