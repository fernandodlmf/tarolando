import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(categoriaService.getCategorias());  
  }


  openPage(page) {
    this.navCtrl.push(CategoriasPage);
  }

}
