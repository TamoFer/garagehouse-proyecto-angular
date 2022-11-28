import { selectSesionState } from './../../../state/sesion.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import Swal from 'sweetalert2';
import { cerrarSesion } from 'src/app/core/state/sesion.actions';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  estadoSesion!:boolean;
  usuarioActivo?:Usuario;

  constructor(
    private sesionStore: Store<Sesion>,
    private rutas:Router
  ) { }

  ngOnInit(): void {
    this.sesionStore.select(selectSesionState).subscribe((datos)=>{
      this.estadoSesion= datos.sesionActiva,
      this.usuarioActivo= datos.usuarioActivo
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
        this.sesionStore.dispatch(cerrarSesion())
        this.rutas.navigate(['autenticacion/login'])
      }
    })
  }

}
