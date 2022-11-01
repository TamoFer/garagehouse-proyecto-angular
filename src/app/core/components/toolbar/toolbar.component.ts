import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  sesion$!:Observable<Sesion>
  valorSesion!:any;

  constructor(
    private sesionService:SesionService,
    private rutas:Router
  ) {

  }

  ngOnInit(): void {
    this.comprobarSesion
  }

  ngAfterContentChecked(): void {
    this.comprobarSesion()
  }

  comprobarSesion(){
    this.sesion$=this.sesionService.obtenerSesion()
    this.sesion$.subscribe((dato:Sesion)=>{
      if(dato.sesionActiva){
        this.valorSesion=dato
      }
    })
  }

  cerrarSesion(){
    Swal.fire({
      title: 'Cierre de sesion',
      text: "Volveras al menu de login",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Cerrar Sesion',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        let sesionCierre:Sesion={
          sesionActiva:false
        }
        this.sesionService.actualizarSesion(sesionCierre)
        this.valorSesion= sesionCierre
        this.rutas.navigate(['autenticacion/login'])
      }
    })


  }

}
