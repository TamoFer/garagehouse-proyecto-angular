import { Observable} from 'rxjs';
import { Alumnos } from '../../models/alumnos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  header:HttpHeaders=new HttpHeaders({
    'content-type': 'application/json',
    'encoding': 'UTF-8'
  })

  constructor(
    private http:HttpClient
  ) {
  }

  ngOnInit(){
  }

  obtenerAlumnos(){
    return this.http.get('https://635b2514aa7c3f113db69e87.mockapi.io/Alumnos');
  }

  getAlumnos():Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${environment.api}/Alumnos`, {
      headers: this.header
    })

  }

  agregarAlumno(alumno:Alumnos){
    this.http.post(`${environment.api}/Alumnos/`, alumno, {
      headers: this.header
    }).subscribe()
  }

  eliminarAlumno(id:number){
    this.http.delete<Alumnos>(`${environment.api}/Alumnos/${id}`).subscribe()

  }

  editarAlumno(alumno:Alumnos) {
    this.http.put<Alumnos>(`${environment.api}/Alumnos/${alumno.idAlumno}`, alumno).subscribe()

  }

}
