import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperarclave',
  templateUrl: './recuperarclave.page.html',
  styleUrls: ['./recuperarclave.page.scss'],
})
export class RecuperarclavePage implements OnInit {

  formularioRecuperar: FormGroup;
  

  constructor(public fb:FormBuilder, private appComponent: AppComponent) { 
    this.formularioRecuperar = this.fb.group({
      'usuario': new FormControl('', Validators.required)
    })
    
  }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  ngOnInit() {
  }

}
