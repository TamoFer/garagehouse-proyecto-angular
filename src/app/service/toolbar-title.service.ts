import { Observable } from 'rxjs/internal/Observable';
import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarTitleService {
  private title_component$!: Observable<String>;

  constructor() {}

  obtenerTitleComponent(component: string){
    this.title_component$= new Observable<String>((sub)=>{
      sub.next(component)
    })
  }




}
