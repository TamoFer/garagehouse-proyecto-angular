import { environment } from './../../../../environments/environment';
import { selectSesionActiva } from './../../state/sesion.selectors';
import { Sesion } from 'src/app/models/sesion';
import { Observable, Subscription} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';


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
  seccion!: string;
  suscripcionSesion!: Subscription;
  suscripcionToolbar!: Subscription;

  constructor(
    private sesionStore:Store<Sesion>,
    private toolbarService: ToolbarTitleService
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.suscripcionSesion!=undefined) {
      this.suscripcionSesion.unsubscribe();
    }
    if (this.suscripcionToolbar!=undefined) {
      this.suscripcionToolbar.unsubscribe();
    }
  }

  ngAfterContentChecked(): void {
    this.comprobarSesion()
    this.suscripcionToolbar=this.toolbarService.obtenerTitleComponent().subscribe((dato)=>{
      this.seccion=dato
    });
  }

  comprobarSesion(){
    this.suscripcionSesion=this.sesionStore.select(selectSesionActiva).subscribe((datosSesion)=>{
      this.estadoSesion= datosSesion.sesionActiva,
      this.usuarioActivo= datosSesion.usuarioActivo
    })
  }

}
