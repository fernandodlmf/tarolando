import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriasProvider {
  private readonly API = 'http://localhost:8080/'

  constructor(public http: HttpClient) {
    console.log('Hello CategoriasProvider Provider');
  }

  getCategorias(){
    return this.http.get(this.API+'seguimentos');
  }

}
