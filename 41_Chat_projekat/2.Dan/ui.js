export class ChatUI {
    constructor(list) {
        this.list = list;
    }
    set list(list) {
        this._list = list;
    }
    get list() {
        return this._list;
    }
    formatDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2, "0");
        m = String(m).padStart(2, "0");
        h = String(h).padStart(2, "0");
        min = String(min).padStart(2, "0");

        let strDate = d + "." + m + "." + g + ". | " + h + ":" + min;

        return strDate;
    }

    templateLI(data) {
        let date = data.created_at.toDate();
        let date1 = String(date).substr(0,11);
        console.log(date1);
        let currentDate = new Date();
        let currentDate1 = String(currentDate).substr(0,11);
        console.log(currentDate1);
        let strDate = this.formatDate(date);
        console.log(strDate);
        let printDate;
        if (date1 == currentDate1) {
            printDate = String(strDate.substr(14, 14));
        }
        else {
            printDate = strDate;
        }
        let lista =
            `<li>
        <span class = 'liUsername'><i class="fas fa-user-circle"></i> ${data.username} : </span>
        <span class = 'liMassage'>${data.message}</span>
        <div class = 'liDate'> ${printDate} </div>
        
        </li>`
        this.list.innerHTML += lista;
    }
}
