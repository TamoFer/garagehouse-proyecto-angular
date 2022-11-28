import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class SnackbarsNotisService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  agregar(alumno?:Alumnos, curso?:Curso, usuario?:Usuario, inscripcion?:Inscripcion) {
    if (alumno) {
      this.snackBar.open(`${alumno.nombre} ${alumno.apellido} agregado `, '', {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-accent'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else if(curso) {
      this.snackBar.open(` Curso ${curso.nombre} agregado `,'' , {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-accent'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else if(usuario){
      this.snackBar.open( `${usuario.nameUsuario}agregado `,'' , {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-accent'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else {
      this.snackBar.open( `Inscripcion #${inscripcion?.id} agregada`,'' , {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-accent'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }

  eliminar(alumno?:Alumnos, curso?:Curso, usuario?:Usuario, inscripcion?:Inscripcion){
    if (alumno) {
      this.snackBar.open(`${alumno.nombre} ${alumno.apellido} eliminado `, '', {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-warn'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else if(curso) {
      this.snackBar.open(` Curso ${curso.nombre} eliminado `,'' , {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-warn'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else if(usuario){
      this.snackBar.open( `${usuario.nameUsuario} eliminado `,'' , {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-warn'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else {
      this.snackBar.open( `Inscripcion #${inscripcion?.id} eliminada`,'' , {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-warn'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }

  error(){
    this.snackBar.open( `No puedes acceder a este sitio`,'' , {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-warn'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
