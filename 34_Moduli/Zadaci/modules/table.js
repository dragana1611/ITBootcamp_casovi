import /*{*/generateImage/*}*/ from "./general.js";

export let generateTable = parent =>{
    let table = document.createElement('table');
    table.style.border = "1px solid black";
    parent.appendChild(table);
    return table;
}

export let generateTableRow = parent =>{
    let tr = document.createElement('tr');
    parent.appendChild(tr);
    return tr;
}

export let generateItem = (parent, src) =>{/*Table*/
    let td = document.createElement('td');
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}