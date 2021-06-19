export class ChatUI{
    constructor (list){
        this.list = list;
    }
    set list(list){
        this._list = list;
    }
    get list(){
        return this._list;
    }
    formatDate(date){
        let d = date.getDate();
        let m = date.getMonth( ) + 1 ;
        let g = date. getFullYear();
        return `${d}.${m}.${g}.`;
    }
    templateLI(data){
        let date = data.created_at.toDate();
        let lista = 
        `<li>
        <span class = 'liUsername'>${data.username}</span>
        <span class = 'liMassage'>${data.message}</span>
        <div> ${this.formatDate(date)} </div>
        
        </li>`
        this.list.innerHTML += lista;
    }
}
