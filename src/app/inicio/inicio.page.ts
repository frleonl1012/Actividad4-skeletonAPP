import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  message: string;
  currentDate: Date;

  constructor(private appComponent: AppComponent, private storage: Storage, private router: Router) { 
    this.currentDate = new Date();
    this.message = 'Usuario'
  }
  

  ImagenLogo(): string {
    return this.appComponent.imgLogo;
  }

  async ngOnInit() {
    const value = await this.storage.get('login');
    this.message = `${value.usuario}`;
  }

  async logout(){
    await this.storage.clear();
    this.router.navigate(['/login']);
  }


}
