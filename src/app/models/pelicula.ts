import { TipoPelicula } from "./enumTipo/enum-tipo-pelicula.enum";

export class Pelicula {
    id?:number;
    titulo?:string;
    tipo?:TipoPelicula;
    anio?:number;
    img?:string;
    descripcion?:string;
}
