import { environment } from './../../../../environments/environment';
import { selectSesionActiva } from './../../state/sesion.selectors';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { Observable, Subscription} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToolbarTitleService } from 'src/app/service/toolbar-title.service';


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
  componente:string='';

  constructor(
    private sesionStore:Store<Sesion>,
    private toolbarService: ToolbarTitleService
  ) {

  }

  ngOnInit(): void {
    this.comprobarSesion(),
    console.log(typeof this.toolbarService.obtenerTitleComponent(this.componente));


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
