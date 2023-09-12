import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  

  constructor(public fb:FormBuilder, private appComponent: AppComponent) { 
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

}
