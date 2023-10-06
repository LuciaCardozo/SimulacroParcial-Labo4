import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { ActorModule } from './actor/actor.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastComponent } from './shared/toast/toast.component';
import { InputValidatorComponent } from './shared/input-validator/input-validator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaPeliculaComponent } from './shared/tabla-pelicula/tabla-pelicula.component';
import { TablaPaisesComponent } from './shared/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './shared/tabla-actor/tabla-actor.component';

const firebaseConfig = {
  apiKey: "AIzaSyArRE_ER1KWu4DizpiWm43TOxl-lY7m1rM",
  authDomain: "db-generico.firebaseapp.com",
  projectId: "db-generico",
  storageBucket: "db-generico.appspot.com",
  messagingSenderId: "1012963788940",
  appId: "1:1012963788940:web:327c3d61c22a6c4123d3a9"
};
@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BienvenidoComponent,
    ToastComponent,
    TablaPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeliculasModule,
    ActorModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
