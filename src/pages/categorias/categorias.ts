import { LocaisPage } from './../locais/locais';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtividadesPage } from '../atividades/atividades';
import { CategoriasProvider } from '../../providers/categorias/categorias';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  selectedItem: any;
  categorias: Array<{nome: string; descricao: string; image_url:string}> 

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public categoriaService: CategoriasProvider) {
      this.categorias = [];

    this.categorias.push({image_url:'assets/imgs/agora.jpg', nome:'Agora', descricao: 'Veja o que rola agora'});
    this.categorias.push({image_url:'assets/imgs/praia.jpg', nome:'praias', descricao: 'belas praias'});
    this.categorias.push({image_url:'assets/imgs/pub.jpg', nome:'barzinhos', descricao: 'barzinhos diferentes'});
    this.categorias.push({image_url:'assets/imgs/praia.jpg', nome:'Atividades', descricao: 'Faça algo diferente'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  selecionaItem(event, item) {
    
    if (item.nome == 'Atividades') {
      this.navCtrl.push(AtividadesPage, {
        categoria : item
      }) 
    } else {
      this.navCtrl.push(LocaisPage, {
        categoria : item
      }) 
    }
    
  }

}
