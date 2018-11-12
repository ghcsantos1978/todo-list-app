import { ToDo } from "../domain/toDo";
import { ToDoProvider } from '../providers/to-do/to-do';
import { AppModule } from '../app/app.module';


export class ToDoModel{

        toDoProvider:ToDoProvider;


        constructor(){
            this.toDoProvider = AppModule.injector.get(ToDoProvider);
        }

        salvar(todo:ToDo):Promise<any>{
            return new Promise((resolve,reject)=>{
                this.toDoProvider.salvar(todo).subscribe((result)=>{
                    try{
                        resolve(result);
                    }
                    catch(e){
                        reject(e);
                    }
                },err=>{
                    reject(err);
                },()=>{
                    console.log("Complete salvar");
                });
    
            })
        }

        validaCamposObrigatorios(todo:ToDo){
            if (!todo.getDescricao() || !todo.getData()){
                return "O campo descrição da tarefa e data são obrigatórios";
            }
            else{
                return "";
            }
        }
    

        listarTodos():Promise<Array<ToDo>>{
            return new Promise((resolve,reject)=>{
                let lista = new Array<ToDo>();
                this.toDoProvider.listarTodos().subscribe((result)=>{
                    try{
                        if (result && result.length > 0){
                            let todo = new ToDo();
                            for (let i = 0;i < result.length;i++){
                                todo.setId(result[i].id);
                                todo.setDescricao(result[i].descricao);
                                todo.setData(result[i].data);
                                lista.push(todo);
                                todo = new ToDo();
                            }        
                        }
                        resolve(lista);
                    }
                    catch(e){
                        reject(e);
                    }
                },err=>{
                    reject(err);
                },()=>{
                    console.log("Complete listar");
                });
            })
        }

        excluir(todo:ToDo):Promise<any>{
            return new Promise((resolve,reject)=>{
                this.toDoProvider.excluir(todo).subscribe((result)=>{
                    try{
                        resolve(result);
                    }
                    catch(e){
                        reject(e);
                    }
                },err=>{
                    reject(err);
                },()=>{
                    console.log("Complete salvar");
                });
    
            })
        }

    }