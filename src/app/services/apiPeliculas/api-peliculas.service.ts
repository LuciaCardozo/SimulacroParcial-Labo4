import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {
  constructor(private http:HttpClient,private firestore: AngularFirestore) { }

  getPeliculas() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bcd8473c8f83b622eecae09bcd1ffb2e')
  }

  getPaises() {
    return this.http.get('https://restcountries.com/v3.1/all');//lang/spanish
  }

  async traerTodo(coleccion: any) {
    try {
      return await this.firestore.collection(coleccion).snapshotChanges();
    }
    catch (error) {
      alert(error);
      return null;
    }
  }

  async alta(coleccion: any, dato: any) {
    try {
      return await this.firestore.collection(coleccion).add(dato);
    }         
    catch (error) {
      alert(error);
      return null;
    }
  }


}
