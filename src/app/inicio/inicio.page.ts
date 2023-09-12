import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  ngOnInit() {
  }

}
