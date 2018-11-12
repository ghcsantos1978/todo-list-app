import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  END_POINT_BACK_END = "https://todolistbackendsonda.herokuapp.com/toDoBackEnd"

  constructor(public http: Http) {
      console.log('Hello ServiceProvider Provider');
  }

}
