import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      nombre: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      curso: new FormControl('',[Validators.required]),
      consulta: new FormControl('',[Validators.required]),
      suscripcion: new FormControl(false,[])
    })
  }

  ngOnInit(): void {
  }

  validadorDatos<elemento>(elemento:any){
    switch(elemento){
      case 'nombre':
        (this.formularioInformativo.get('nombre')?.touched && this.formularioInformativo.get('nombre')?.errors?.['required']? true:false);
        break;
      case 'email':
        (this.formularioInformativo.get('email')?.touched && this.formularioInformativo.get('email')?.errors?.['required'] && this.formularioInformativo.get('correo')?.errors?.['pattern']? true:false);
        break;
      case 'curso':
        (this.formularioInformativo.get('curso')?.touched && this.formularioInformativo.get('curso')?.errors?.['required']? true:false);
        break;
    }
  }

  mostrarDatos(): void{
    const nombre= this.formularioInformativo.value.nombre;
    const correo= this.formularioInformativo.value.email;
    const curso= this.formularioInformativo.value.curso;
    const consulta= this.formularioInformativo.value.consulta;
    const oferta= this.formularioInformativo.value.suscripcion;
    const consultor= {nombre, correo, curso, consulta, oferta}
  }

}
