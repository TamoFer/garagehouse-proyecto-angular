import { Component, OnInit } from '@angular/core';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  seccion:string = '¡Pagina No Encontrada! ERROR 404'
  constructor(
    private toolbarService: ToolbarTitleService
  ) { }

  ngOnInit(): void {
    this.toolbarService.editarTitleComponent(this.seccion)
  }

}
