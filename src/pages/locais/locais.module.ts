import { LocalDetalhesPageModule } from './../local-detalhes/local-detalhes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaisPage } from './locais';

@NgModule({
  declarations: [
    LocaisPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaisPage),
    LocalDetalhesPageModule
  ]
})
export class LocaisPageModule {}
