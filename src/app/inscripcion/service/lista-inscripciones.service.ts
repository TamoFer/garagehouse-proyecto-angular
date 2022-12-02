import { Inscripcion } from './../../models/inscripcion';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaInscripcionesService {

  constructor(
    private http:HttpClient
  ) {}

  obtenerInscripciones():Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${environment.api}/inscripciones`);
  }

  agregarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(`${environment.api}/inscripciones`, inscripcion);
  }

  editarInscripcion(inscripcion: Inscripcion) {
    return this.http.put<Inscripcion>(`${environment.api}/inscripciones/${inscripcion.id}`, inscripcion)
  }

  eliminarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.delete<Inscripcion>(`${environment.api}/inscripciones/${inscripcion.id}`);
  }
}
