import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiPeliculasService } from 'src/app/services/apiPeliculas/api-peliculas.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  form: FormGroup;
  imageToUpload:any;
  paises:any;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toast:ToastService, private database:ApiPeliculasService) { 
    this.form = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      state: new FormControl({value: '', disabled: true}, Validators.required),
      paisSeleccionado: new FormControl({value: '', disabled: true}, Validators.required),
      //username: ["", Validators.required],
      email: ["",Validators.email],
      address: ["", Validators.required],
      //addressTwo: "",
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.database.getPaises().subscribe({
      next: (res) => {
        this.loading = false;
        this.paises = res;
        this.paises.sort((a:any,b:any)=> a.name.common>b.name.common)
      }, error: (err)=> {
        this.loading = false;
      }
    })
  }

  altaActor() {
    this.loading = true;
    let datos = {...this.form.value, image:this.imageToUpload}
    if (this.form.status == "VALID") {
      this.database.alta('actores',datos).then( (res) => {
        this.toast.show("Alta exitoso!", { classname: 'bg-success', "delay": "2000" });
        this.loading = false;
        this.limpiarForm();
      }).catch( (err) => {
        this.loading = false;
      })
    } else {
      this.loading = false;
      this.toast.show("Completa el campo", { classname: 'bg-danger', "delay": "2000" });
    }
  }

  uploadImage(event:any) {
    let reader = new FileReader();
    let archivoCapturado = event.target.files[0];
    reader.readAsDataURL(archivoCapturado);
    reader.onloadend = () => {
      this.imageToUpload = reader.result;
    }
  }

  countrySeleccionado(dato:any){
    this.form.get('paisSeleccionado')?.enable();
    this.form.get('state')?.enable();
    this.form.controls['paisSeleccionado'].setValue(dato.pais);
    this.form.controls['state'].setValue(dato.state);
  }

  limpiarForm() {
    this.form.controls['name'].setValue('');
    this.form.controls['lastname'].setValue('');
    //this.form.controls['username'].setValue('');
    this.form.controls['email'].setValue('');
    this.form.controls['address'].setValue('');
    //this.form.controls['addressTwo'].setValue('');
    this.form.controls['paisSeleccionado'].setValue('');
    this.form.controls['state'].setValue('');
    this.imageToUpload = null;
  }

}
