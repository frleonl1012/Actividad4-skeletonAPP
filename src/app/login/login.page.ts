import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  

  constructor(public fb:FormBuilder, private appComponent: AppComponent, private router: Router, private storage: Storage) { 
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl('', Validators.required),
      'clave': new FormControl('', Validators.required)
    })
    
  }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  async ngOnInit() {
    await this.storage.create();
  }

  async guardar(){
    var f = this.formularioLogin.value;

    var login = {
      usuario: f.usuario,
      clave: f.clave
    }
    
    await this.storage.set("login",login)
    this.router.navigate(['/inicio']);
  }

}
