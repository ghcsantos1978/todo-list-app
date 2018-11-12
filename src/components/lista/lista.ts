import { ToDoModel } from './../../model/toDoModel';
import { Component } from '@angular/core';
import { ToDo } from '../../domain/toDo';
import { NavController } from 'ionic-angular';
import { CadastroComponent } from '../cadastro/cadastro';
import { ViewProvider } from '../../providers/view/view';
import { UtilProvider } from './../../providers/util/util';
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
  toDoModel:ToDoModel;

    constructor(private nav:NavController,private viewProvider:ViewProvider,private util:UtilProvider) {
        this.listaToDo = new Array<ToDo>();
        this.toDoModel = new ToDoModel();
        this.titulo = "Lista de Tarefas";
        this.listarTodos();
    }


    novo(){
      this.nav.push(CadastroComponent);
    }

    listarTodos(){
        let loading = this.viewProvider.loadingProcessando();
        loading.present();    
        this.toDoModel.listarTodos().then(result=>{
            this.listaToDo = result;
            loading.dismiss();
        }).catch(error=>{
            loading.dismiss();
        })
    }


    excluir(todo:ToDo){
        let loading = this.viewProvider.loadingProcessando();
        loading.present();    
        this.toDoModel.excluir(todo).then(result=>{
            if (result.retorno == "TRUE"){
              this.excluiItem(todo); 
              this.viewProvider.showAlert("","Item excluído com sucesso")
            }
            else{
               this.viewProvider.showAlert("","Erro na exclusão");
            }
            loading.dismiss();
        }).catch(error=>{
            loading.dismiss();
            this.viewProvider.showAlert("",this.util.INDISPONIBILIDADE_TEMPORARIA);
        })
    }

    excluiItem(todo:ToDo){
      this.listaToDo = this.listaToDo.filter(obj => obj !== todo);
    }

}
