import { Component } from '@angular/core';
import { ToDo } from '../../domain/toDo';
import { ToDoModel } from '../../model/toDoModel';

/**
 * Generated class for the CadastroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroComponent {

    titulo:string;
    toDo:ToDo;
    toDoModel:ToDoModel;

    constructor() {
        this.toDo = new ToDo();
        this.titulo = "Todo List - Sonda";
    }

    salvar(){
      
    }

}
