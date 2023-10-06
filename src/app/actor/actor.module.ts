import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidatorComponent } from '../shared/input-validator/input-validator.component';
import { TablaPaisesComponent } from '../shared/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from '../shared/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    InputValidatorComponent,
    TablaPaisesComponent,
    
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ActorModule { }
