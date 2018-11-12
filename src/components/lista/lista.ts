import { Component } from '@angular/core';
import { ToDo } from '../../domain/toDo';
import { NavController } from 'ionic-angular';
import { CadastroComponent } from '../cadastro/cadastro';

/**
 * Generated class for the ListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lista',
  templateUrl: 'lista.html'
})
export class ListaComponent {

  text: string;
  titulo:string;
  listaToDo:Array<ToDo>

  constructor(private nav:NavController) {
      this.listaToDo = new Array<ToDo>();
  }


  novo(){
    this.nav.push(CadastroComponent);
  }

}
