import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {

  formularioNuevaClave: FormGroup;

  constructor(public fb:FormBuilder, private appComponent: AppComponent) { 
    this.formularioNuevaClave = this.fb.group({
      'nuevaClave': new FormControl('', Validators.required),
      'repetirClave': new FormControl('', Validators.required)
    })
  }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  ngOnInit() {
  }

}
