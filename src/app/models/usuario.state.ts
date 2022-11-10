import { Usuario } from 'src/app/models/usuario';


export interface UsuarioState {
  cargando:boolean,
  usuarios: Usuario[]
}
