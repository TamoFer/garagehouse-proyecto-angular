import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import Swal from'sweetalert2';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formularioInformativo: FormGroup;
  listaCursos: Array<string>=
  [ 'Desarrollo Web',
    'JavaScript',
    'Angular',
    'React',
    'Python',
    'Backend'
  ];

  constructor(
    private formsConstructor: FormBuilder
  ) {
    this.formularioInformativo =formsConstructor.group({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl('',[Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'), Validators.required]),
      curso: new FormControl('',[Validators.required]),
      consulta: new FormControl('',[Validators.required,Validators.minLength(10)]),
      suscripcion: new FormControl(false,[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  mostrarDatos(): void{
    const nombre= this.formularioInformativo.value.nombre;
    const correo= this.formularioInformativo.value.email;
    const curso= this.formularioInformativo.value.curso;
    const consulta= this.formularioInformativo.value.consulta;
    const oferta= this.formularioInformativo.value.suscripcion;
    const datoConsulta=[nombre, correo,curso,consulta,oferta];
    Swal.fire({
      title: "Consulta recibida",
      text: `Muchas gracias ${nombre} por estar interesado en nuestros cursos, en breve contestaremos tu respuesta! Esta misma llegara al correo: ${correo}`,
      timer: 4000,
      icon: "success",
    })
    localStorage.setItem("Consulta", JSON.stringify(datoConsulta));
    console.log(localStorage.getItem("Consulta"));

  }
}
