import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiPeliculasService } from 'src/app/services/apiPeliculas/api-peliculas.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  listaActores:any;
  form: FormGroup;
  imageToUpload:any;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toast:ToastService, private db:ApiPeliculasService) { 
    this.form = this.fb.group({
      titulo: ["", Validators.required],
      tipo: ["", Validators.required],
      anio:["", Validators.required],
      descripcion: ["", Validators.required],
      cantidadDePublico: ["", Validators.required],
      nombreActor: [{value: "", disabled: true}, Validators.required],
      apellidoActor: [{value: "", disabled: true}, Validators.required]
    });
  }

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

  altaPelicula() {
    this.loading = true;
    let datos = {...this.form.value, img: this.imageToUpload};

    if (this.form.status == "VALID" && this.form.controls['nombreActor'].value != '' 
    && this.form.controls['apellidoActor'].value != '' && this.imageToUpload != undefined) {
      this.db.alta('peliculas',datos).then((res)=>{
        if(res != null) {
          this.toast.show("Alta exitoso!", { classname: 'bg-success', "delay": "2000" });
          this.loading = false;
          this.limpiarForm();
        } else {
          this.toast.show("Error al cargar los datos", { classname: 'bg-danger', "delay": "2000" });
        }
      }).catch((err)=>{
        this.toast.show("Error al cargar los datos", { classname: 'bg-danger', "delay": "2000" });
        this.loading = false;
      })
    } else {
      this.loading = false;
      this.toast.show("Completa el campo", { classname: 'bg-danger', "delay": "2000" });
    }
  }

  uploadImage(event: any) {
    let reader = new FileReader();
    let archivoCapturado = event.target.files[0];
    reader.readAsDataURL(archivoCapturado);
    reader.onloadend = () => {
      this.imageToUpload = reader.result;
    };
  }

  actorSeleccionado(actor: any) {
    this.form.controls['nombreActor'].setValue(actor.name);
    this.form.controls['apellidoActor'].setValue(actor.lastname);
    console.log(this.form.controls['nombreActor'])
  }

  limpiarForm() {
    this.form.controls['nombreActor'].setValue('');
    this.form.controls['apellidoActor'].setValue('');
    this.form.controls['titulo'].setValue('');
    this.form.controls['anio'].setValue('');
    this.form.controls['descripcion'].setValue('');
    this.form.controls['tipo'].setValue('');
    this.form.controls['cantidadDePublico'].setValue('');
    this.imageToUpload = undefined;
  }
}
