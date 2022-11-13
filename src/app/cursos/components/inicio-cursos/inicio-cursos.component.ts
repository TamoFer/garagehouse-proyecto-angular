import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-inicio-cursos',
  templateUrl: './inicio-cursos.component.html',
  styleUrls: ['./inicio-cursos.component.scss']
})
export class InicioCursosComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {

  }

}
