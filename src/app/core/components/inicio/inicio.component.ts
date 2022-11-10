import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { selectorCursosCargados } from 'src/app/states/selectors/cursos.selector';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  cursos$!:Observable<Curso[]>

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectorCursosCargados);
  }

}
