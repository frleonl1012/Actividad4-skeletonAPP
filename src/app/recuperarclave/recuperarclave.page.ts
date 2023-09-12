import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarclave',
  templateUrl: './recuperarclave.page.html',
  styleUrls: ['./recuperarclave.page.scss'],
})
export class RecuperarclavePage implements OnInit {

  formularioRecuperar: FormGroup;
  

  constructor(public fb:FormBuilder, private appComponent: AppComponent, private alertController: AlertController, private router: Router) { 
    this.formularioRecuperar = this.fb.group({
      'usuario': new FormControl('', Validators.required)
    })
    
  }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Ingresar código',
      message: 'Hemos enviado un código a tu correo',
      inputs: [
        {
          name:'codigo',
          type:'text',
          placeholder: 'Ingresar código'
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Redirige a la página deseada después de hacer clic en OK
            this.router.navigate(['/cambiarclave']);
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
