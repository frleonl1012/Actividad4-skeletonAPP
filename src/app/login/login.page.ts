import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  

  constructor(public fb:FormBuilder, private appComponent: AppComponent, private router: Router) { 
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl('', Validators.required),
      'clave': new FormControl('', Validators.required)
    })
    
  }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioLogin.value;

    var login = {
      usuario: f.usuario,
      clave: f.clave
    }

    localStorage.setItem('login', JSON.stringify(login));
    this.router.navigate(['/inicio']);
  }

}
