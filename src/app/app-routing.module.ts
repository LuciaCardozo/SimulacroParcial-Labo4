import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [{path:"",redirectTo:"busqueda",pathMatch:"full"},
{path:"bienvenido",component:BienvenidoComponent},
{path:"busqueda",component:BusquedaComponent},
{path:"pelicula",loadChildren:() => import('./peliculas/peliculas.module').then(m => m.PeliculasModule)},
{path:"actor",loadChildren:() => import('./actor/actor.module').then(m => m.ActorModule)}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
