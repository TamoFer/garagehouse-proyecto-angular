import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { ToolbarTitleService } from 'src/app/service/toolbar-title.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  cursos$!:Observable<Curso[]>
  seccion:string='Inicio'

  constructor(
    private toolbarService: ToolbarTitleService
  ) { }

  ngOnInit(): void {
    this.toolbarService.editarTitleComponent(this.seccion);
  }

}
