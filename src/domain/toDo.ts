export class ToDo{



    constructor(){

    }

    private id:string;
    private descricao:string;
    private data:string;


    public getId(){
        return this.id;
    }

    public setId(id:string){
        this.id = id;
    }

    public getDescricao(){
        return this.descricao;
    }

    public setDescricao(descricao:string){

    }

    public setData(data:string){
        this.data = data;
    }

    public getData(){
        return this.data;
    }

}