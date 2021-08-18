import { LocaisPage } from './../pages/locais/locais';
import { SeguimentosPage } from './../pages/seguimentos/seguimentos';
import { CategoriasPage } from './../pages/categorias/categorias';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavParams, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AtividadesPage } from '../pages/atividades/atividades';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{titulo: string, componente : any}>;

  rootPage:any = HomePage;

  constructor(public platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private menu : MenuController) {
    this.initializeApp();
    this.pages = [];
    this.pages.push({titulo : 'Home', componente: HomePage });
    this.pages.push({titulo : 'Atividades', componente: AtividadesPage });
    this.pages.push({titulo : 'Locais', componente: LocaisPage });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.componente);
    //this.nav.push(page.componente);
  }
}

