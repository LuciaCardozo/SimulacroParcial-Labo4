import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from 'src/app/services/apiPeliculas/api-peliculas.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  listaActores: any = [];
  constructor(private db:ApiPeliculasService) { }

  async ngOnInit() {
    const res = await this.db.traerTodo("actores");
    res?.subscribe({
      next: (res) => {
        this.listaActores = res.map((pelicula: any) => pelicula.payload.doc.data());
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
