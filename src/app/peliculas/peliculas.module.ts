import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { AppModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaPeliculaComponent } from '../shared/tabla-pelicula/tabla-pelicula.component';
import { TablaActorComponent } from '../shared/tabla-actor/tabla-actor.component';
import { InputValidatorComponent } from '../shared/input-validator/input-validator.component';

@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaActorComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ], providers:[InputValidatorComponent]
})
export class PeliculasModule { }
