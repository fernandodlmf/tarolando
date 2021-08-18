import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeguimentosPage } from './seguimentos';

@NgModule({
  declarations: [
    SeguimentosPage,
  ],
  imports: [
    IonicPageModule.forChild(SeguimentosPage),
  ],
})
export class SeguimentosPageModule {}
