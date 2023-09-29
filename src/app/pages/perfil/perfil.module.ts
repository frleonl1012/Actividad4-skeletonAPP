import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PerfilPage } from './perfil.page';

import { ExpLaboralComponent } from '../../components/exp-laboral/exp-laboral.component';
import { CertificadosComponent } from '../../components/certificados/certificados.component';
import { MisDatosComponent } from '../../components/mis-datos/mis-datos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerfilPage, ExpLaboralComponent, CertificadosComponent, MisDatosComponent]
})
export class PerfilPageModule {}
