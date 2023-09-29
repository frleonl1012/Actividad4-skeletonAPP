import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { ModalPerfilComponent } from '../modal-perfil/modal-perfil.component'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})

export class MisDatosComponent  implements OnInit {

  formMisDatos: FormGroup;

  constructor( public fb:FormBuilder, private storage: Storage, private modalController: ModalController ) { 
    this.formMisDatos = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      nivelEducacion: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  async mostrar(){
    var f = this.formMisDatos.value;

    var perfil = {
      nombre: f.nombre,
      apellido: f.apellido,
      nivelEducacion: f.nivelEducacion,
      fechaNacimiento: f.fechaNacimiento
    }

    await this.storage.set("perfil", perfil)

    const modal = await this.modalController.create({
      component: ModalPerfilComponent,
    });

    return await modal.present();

  }

  limpiarCampos() {
    this.formMisDatos.reset();
  }

}
