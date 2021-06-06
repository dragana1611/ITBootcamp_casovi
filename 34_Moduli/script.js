//dohvati promenljivu ime i f-ju zdravo iz modula zdravo
import {ime, zdravo} from "./modules/zdravo.js";
//impor {hello} from "./zdravo2.js"   //nije bitan redosled .js modula
//moze i {zdravo, ime}
let prezime = "stanimirovic";
//let ime = "stefan";
console.log(ime + " " + prezime); //
//zdravo();
zdravo("pera")
zdravo(ime);