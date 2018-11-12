import { ListaComponent } from './../lista/lista';
import { NavController } from 'ionic-angular';
import { UtilProvider } from './../../providers/util/util';
import { ViewProvider } from './../../providers/view/view';
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

    constructor(private viewProvider:ViewProvider,private util:UtilProvider,private nav:NavController) {
        this.toDo = new ToDo();
        this.titulo = "Todo List - Sonda";
        this.toDoModel = new ToDoModel();
    }

    salvar(){
        let msg = this.toDoModel.validaCamposObrigatorios(this.toDo);
        if (msg!=""){
            this.viewProvider.showAlert("",msg);
        }
        else{
            this.toDoModel.salvar(this.toDo).then((result)=>{
                if (result.retorno == "TRUE"){
                    this.viewProvider.showAlert("","Dados salvados com sucesso");
                    this.limparCampos();
                }
            }).catch(error=>{
                this.viewProvider.showAlert("",this.util.INDISPONIBILIDADE_TEMPORARIA);
            })
        }
    }

    limparCampos(){
        this.toDo = new ToDo();
        this.toDo.setDescricao("");
        this.toDo.setData("");
        this.toDo.setId("");
        
    }


    listar(){
        this.nav.push(ListaComponent);
    }

}
