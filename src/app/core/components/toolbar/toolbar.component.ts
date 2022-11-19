import { environment } from './../../../../environments/environment';
import { selectSesionActiva } from './../../state/sesion.selectors';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  nombreAplicacion:string=  environment.nombreAplicacion;
  sesion$!:Observable<Sesion>;
  estadoSesion!: any;
  usuarioActivo!: any;

  constructor(
    private sesionStore:Store<Sesion>,
    private rutas:Router
  ) {

  }

  ngOnInit(): void {
    this.comprobarSesion()
  }

  ngAfterContentChecked(): void {
    this.comprobarSesion()
  }

  comprobarSesion(){
    this.sesionStore.select(selectSesionActiva).subscribe((datosSesion)=>{
      this.estadoSesion= datosSesion.sesionActiva,
      this.usuarioActivo= datosSesion.usuarioActivo
    })
  }

}
