import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() datos: any;
  mostrarDatos = false;
  dato = {
    titulo:null,
    anio:null,
    actor:null,
    descripcion:null,
    tipo:null,
    id:null,
    img:null
  };

  constructor() { }

  ngOnInit(): void {
  }

  cargarDatos(event:any){
    this.mostrarDatos = true;
    this.dato = event;
  }

  editarPelicula() {
    console.log(this.dato)
  }
}
