//  import /*{*/ generateImage /*} */from './modules/general.js';
//  import {generateList, generateItem as generateListItem /*proizvoljno ime*/} from "./modules/list.js";/*List*/
//  import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";/*Table*/
// document.body.appendChild(generateImage('images/01.JPG'));
// document.body.appendChild(generateImage('images/02.JPG'));
// document.body.appendChild(generateImage('images/03.JPG'));

// let ul= generateList(document.body);
// let li1 = generateListItem(ul, './images/01.JPG');/*List*/
// let li2 = generateListItem(ul, 'images/02.JPG');
// let li3 = generateListItem(ul, 'images/03.JPG');

// let t = generateTable(document.body);
// let tr = generateTableRow(t);
// for(let i=1; i<=3; i++){
//     generateTableItem(tr, `images/0${i}.JPG`);
// }/*Table*/

console.log('hello world');
// import { message } from './message.js'

// const h1 = document.createElement('h1');
// h1.textContent = message

// document.body.appendChild(h1)


 import /*{*/ generateImage /*} */from './modules/general.js';
 import * as List  from "./modules/list.js";
 import * as Table from "./modules/table.js";
document.body.appendChild(generateImage('images/01.JPG'));
document.body.appendChild(generateImage('images/02.JPG'));
document.body.appendChild(generateImage('images/03.JPG'));

let ul= List.generateList(document.body);
let li1 = List.generateItem(ul, './images/01.JPG');/*List*/
let li2 = List.generateItem(ul, 'images/02.JPG');
let li3 = List.generateItem(ul, 'images/03.JPG');

let t = Table.generateTable(document.body);
let tr = Table.generateTableRow(t);
for(let i=1; i<=3; i++){
    Table.generateItem(tr, `images/0${i}.JPG`);
}