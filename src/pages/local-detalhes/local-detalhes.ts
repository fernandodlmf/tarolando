import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocalDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-detalhes',
  templateUrl: 'local-detalhes.html',
})
export class LocalDetalhesPage {
  local : Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.local = navParams.get('local');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalDetalhesPage');
  }

}
