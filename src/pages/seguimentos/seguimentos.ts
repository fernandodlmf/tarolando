import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeguimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguimentos',
  templateUrl: 'seguimentos.html',
})
export class SeguimentosPage {
  atividades: Array<{foto: string, nome : string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carregaLocais();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguimentosPage');
  }

  carregaLocais() {
    this.atividades = [];
    for (let i = 0; i < 11; i++) {
        this.atividades.push({foto: 'foto', nome: 'nome'});
    }
  }

}
