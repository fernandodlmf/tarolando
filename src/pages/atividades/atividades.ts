import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtividadeDetalhesPage } from '../atividade-detalhes/atividade-detalhes';

/**
 * Generated class for the AtividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class AtividadesPage {
  icons: string[];
  atividades: Array<{foto: string, nome : string, icon : string}>;
  categoria : Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoria = navParams.get('categoria');
    console.log(this.categoria);
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.carregaAtividades();
    console.log(this.atividades);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadesPage');
  }

  carregaAtividades() {
    this.atividades = [];
    for (let i = 0; i < 11; i++) {
        this.atividades.push({foto: 'foto', nome: 'nome',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]});
    }
  }

  itemSelecionado(event, item) {
    this.navCtrl.push(AtividadeDetalhesPage, {
      atividade: item
    })
  }

}
