import { Http,Headers,Response } from '@angular//http';
import { Injectable } from '@angular/core';
import {ToDo} from '../../domain/toDo';
import { ServiceProvider } from '../service/service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

/*
  Generated class for the ToDoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDoProvider {

    URL_SALVAR = "/todoList/inserir";
    URL_LISTAR_TODOS = "/todoList/listar";
    URL_EXCLUIR = "/todoList/excluir";

    constructor(public http: Http,private serviceProvider:ServiceProvider) {
      console.log('Hello ToDoProvider Provider');
    }


    salvar(toDo:ToDo):Observable<any>{
      const headers = new Headers({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'content-type':'application/json'
          });
          let body = `{"descricao":"${toDo.getDescricao()}","data":"${toDo.getData()}"}`;
          return this.http.post(this.serviceProvider.END_POINT_BACK_END  + this.URL_SALVAR,body, {headers})
          .map((data: Response) => {
              return data.json();
          })
          .retry(1)
          .share();
    }

    listarTodos(){
      const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'content-type':'application/json'
        });
        return this.http.get(this.serviceProvider.END_POINT_BACK_END  + this.URL_LISTAR_TODOS,{headers})
        .map((data: Response) => {
            return data.json();
        })
        .retry(1)
        .share();
    }

    excluir(toDo:ToDo):Observable<any>{
      const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'content-type':'application/json'
        });
        let body = `{"id":"${toDo.getId()}","descricao":"${toDo.getDescricao()}","data":"${toDo.getData()}"}`;
        return this.http.post(this.serviceProvider.END_POINT_BACK_END  + this.URL_EXCLUIR,body, {headers})
        .map((data: Response) => {
            return data.json();
        })
        .retry(1)
        .share();
    }


}
