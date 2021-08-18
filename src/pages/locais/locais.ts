import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalDetalhesPage } from '../local-detalhes/local-detalhes';

/**
 * Generated class for the LocaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locais',
  templateUrl: 'locais.html',
})
export class LocaisPage {
  locais  = [];
  atividades: Array<{foto: string, nome : string, icon : string}>;
  categoria : Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoria = navParams.get('categoria');
    this.carregaLocais();
    console.log(this.carregaLocais());
  }

  carregaLocais() {
    this.locais.push({id: 1, descricao: 'Barzinho legal e tal', nome:'Le Pub'});
    this.locais.push({id: 2, descricao: 'Barzinho legal e tal', nome:'Bar do Elvis'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocaisPage');
  }

  itemSelecionado(event, item) {
    this.navCtrl.push(LocalDetalhesPage, {
      local: item
    })
  }

}
