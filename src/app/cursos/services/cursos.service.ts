import { HttpClient} from '@angular/common/http';
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
  ) {}

  obtenerCursos():Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/Cursos`);
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${environment.api}/Cursos`, curso);
  }

  editarCurso(curso: Curso) {
    return this.http.put<Curso>(`${environment.api}/Cursos/${curso.id}`, curso)
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${environment.api}/Cursos/${curso.id}`);
  }
}


