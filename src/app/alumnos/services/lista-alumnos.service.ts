import { Observable} from 'rxjs';
import { Alumnos } from '../../models/alumnos';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {


  constructor(
    private http:HttpClient
  ) {}

  obtenerAlumnos():Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(`${environment.api}/Alumnos`);
  }

  agregarAlumnos(alumno: Alumnos): Observable<Alumnos>{
    return this.http.post<Alumnos>(`${environment.api}/Alumnos`, alumno);
  }

  editarAlumnos(alumno: Alumnos) {
    return this.http.put<Alumnos>(`${environment.api}/Alumnos/${alumno.idAlumno}`, alumno)
  }

  eliminarAlumnos(alumno: Alumnos): Observable<Alumnos>{
    return this.http.delete<Alumnos>(`${environment.api}/Alumnos/${alumno.idAlumno}`);
  }

}
