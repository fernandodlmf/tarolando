import { CategoriasPageModule } from './../pages/categorias/categorias.module';
import { LocaisPageModule } from './../pages/locais/locais.module';
import { AtividadesPageModule } from './../pages/atividades/atividades.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { AtividadesPage } from '../pages/atividades/atividades';
import { LocaisPage } from '../pages/locais/locais'
import { HttpClientModule } from '@angular/common/http';
import { CategoriasPage } from '../pages/categorias/categorias';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AtividadesPageModule,
    CategoriasPageModule,
    LocaisPageModule,
    HttpClientModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AtividadesPage,
    LocaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriasProvider
  ]
})
export class AppModule {}
