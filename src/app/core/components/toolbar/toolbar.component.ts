import { Sesion } from './../../../models/sesion';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  sesion$!:Observable<Sesion>

  constructor(
    private sesionService:SesionService
  ) {
    let sesion= this.sesionService.obtenerSesion()

  }

  ngOnInit(): void {
    this.sesion$= this.sesionService.obtenerSesion()

  }




}
