import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inicioSesion!: FormGroup;
  opcUsers: Array<any>= ['Alumno','Profesor'];

  constructor(
    private sesionService: SesionService,
    private ruta: Router
  ) {
    this.inicioSesion = new FormGroup({
      email: new FormControl('juancito@gmail.com',[Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'), Validators.required]),
      contrasena: new FormControl('1234', [Validators.required]),
      perfil: new FormControl('Profesor',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login(){

    this.sesionService.login(this.inicioSesion.value);
    this.ruta.navigate(['inicio']);
  }

  vaciarCampos(){
    this.inicioSesion.reset({
      email:'',
      contrasena:'',
      perfil:''
    })
    this.ruta.navigate(['login']);
  }
}
