class Auto{
    constructor(b, m) { //boja i marka
        this._boja = b;
        this._marka = m;
        //this.sviraj();
    }
    sviraj(){
        console.log(`${this._marka} beep, beep`);
    }
}

//kreiranje novog objekta - kada se kreira novi objekat, prvo se poziva konstruktor klase, stoga za kreiranje objekta u zagradama je potrebno proslediti vrednosti koje zelimo da postavimo u konstruktoru tj. koje konstruktor ocekuje
let auto1 = new Auto("red", "Fiat");
console.log(auto1);
console.log(auto1._boja);
console.log(auto1["_boja"]);
auto1.sviraj();

let auto2 = new Auto("white", "Peugeot");
console.log(auto2._marka);
auto2.sviraj();

let auto3 = new Auto("blue", "Toyota");
auto3.sviraj();

let automobili = [auto1, auto2, auto3];
console.log(automobili);
// let auto2 = new Auto(["red", "orange", "yellow"], "Opel");
// console.log(auto2);