import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() peliculas:any;
  @Output() clickPeli:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  seHizoClick(pelicula:any, i:number) {
    let peliculaSeleccionada = {...pelicula, posicion: i};
    this.clickPeli.emit(peliculaSeleccionada);
  }

}
