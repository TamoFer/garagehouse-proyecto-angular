import { Inscripcion } from './../../models/inscripcion';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaInscripcionesService {

  header:HttpHeaders=new HttpHeaders({
    'content-type': 'application/json',
    'encoding': 'UTF-8'
  })

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {}

  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.api}/isncripciones`, {
      headers: this.header
    })
  }
}
