import { Observable } from 'rxjs/internal/Observable';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarTitleService {
  private title_component$!: Observable<string>;
  private component:string = 'toolbar';

  constructor() {
    this.title_component$= new Observable<string>((sub)=>{
      sub.next(this.component)
    })
  }

  editarTitleComponent(component: string){
    this.title_component$= new Observable<string>((sub)=>{
      sub.next(component)
    })
  }

  obtenerTitleComponent(){
    return this.title_component$
  }



}
