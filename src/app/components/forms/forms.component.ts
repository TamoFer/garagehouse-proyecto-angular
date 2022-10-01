import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formularioInformativo: FormGroup;

  constructor(
    private formsConstructor: FormBuilder
  ) {
    this.formularioInformativo =formsConstructor.group({
      nombre: new FormControl('',[]),
      email: new FormControl('',[]),
      curso: new FormControl('',[]),
      consulta: new FormControl('',[]),
      ofertas: new FormControl(false,[])
    })
  }

  ngOnInit(): void {
  }

  mostrarDatos(){
    const nombre= this.formularioInformativo.value.nombre;
    const correo= this.formularioInformativo.value.email;
    const curso= this.formularioInformativo.value.curso;
    const consulta= this.formularioInformativo.value.consulta;
    const oferta= this.formularioInformativo.value.oferta;
    console.log(nombre, correo,curso,consulta,oferta);

  }

}
