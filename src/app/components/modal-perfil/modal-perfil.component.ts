import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.scss'],
})
export class ModalPerfilComponent  implements OnInit {

  datosFormulario: any[] = [];

  constructor(private storage: Storage, private modalController: ModalController) { 
   
  }

  async ngOnInit() {
    const datos = await this.storage.get('perfil');
    this.datosFormulario = [datos];
    console.log(datos);
  }

  cerrarModal() {
    // Cierra el modal actual
    this.modalController.dismiss();
  }

}
