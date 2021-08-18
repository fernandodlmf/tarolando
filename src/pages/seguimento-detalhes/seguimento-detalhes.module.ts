import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeguimentoDetalhesPage } from './seguimento-detalhes';

@NgModule({
  declarations: [
    SeguimentoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(SeguimentoDetalhesPage),
  ],
})
export class SeguimentoDetalhesPageModule {}
