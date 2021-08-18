import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalDetalhesPage } from './local-detalhes';

@NgModule({
  declarations: [
    LocalDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalDetalhesPage),
  ],
})
export class LocalDetalhesPageModule {}
