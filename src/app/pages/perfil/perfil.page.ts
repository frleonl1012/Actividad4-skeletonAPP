import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  segmentValue: string = 'exp-laboral';

  constructor(private appComponent: AppComponent) { }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  ngOnInit() {
  }

}
