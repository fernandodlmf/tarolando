import { AtividadeDetalhesPageModule } from './../atividade-detalhes/atividade-detalhes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtividadesPage } from './atividades';

@NgModule({
  declarations: [
    AtividadesPage
  ],
  imports: [
    IonicPageModule.forChild(AtividadesPage),
    AtividadeDetalhesPageModule
  ],
})
export class AtividadesPageModule {}
