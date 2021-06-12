import {Knjiga} from "./knjiga.js";

let knjiga1 = new Knjiga('Bajke', 'Hans Hristijan Andersen', 2004, 714, 500);
let knjiga2 = new Knjiga('Hajdi', 'Johana Spiri', 1994, 304, 600);
let knjiga3 = new Knjiga('Orlovi rano lete', 'Branko Copic', 2020, 186, 400);

knjiga1.stampaj();

console.log(`Da li je knjiga obimna: ${knjiga1.obimna()}`);
console.log(`Da li je knjiga skupa: ${knjiga1.skupa()}`);
console.log(`Ime autora je: ${knjiga1.autor}; Da li je ime dugacko: ${knjiga1.dugackoIme()}`);

let arrknjige = [knjiga1, knjiga2, knjiga3];
console.log(arrknjige);

//Ispis svih podataka iz arrknjige
arrknjige.forEach(knjiga =>{
    knjiga.stampaj();
});

for (let i=0; i<arrknjige.length; i++){
    arrknjige[i].stampaj();
}

let ukupnaCena = niz =>{
    let suma =0;
    niz.forEach(k =>{
        suma += k.cena; // getter za cenu i poziva se bez zagrada ()
    });
    return suma;
}

console.log(`Ukupna cena svih lnjiga iz niza je: ${ukupnaCena(arrknjige)}`);

// kolika je prosecna cena knjige
let prosecnaCena = niz =>{
    let ukupno = ukupnaCena(niz);
    let brKnjiga = niz.length;
    return ukupno / brKnjiga;
}

console.log(`Prosecna cena knjige je: ${prosecnaCena(arrknjige)}`);

// prosecna cena stranice knjige
let prosecnaStranica = niz =>{
    let ukupna = ukupnaCena(niz);
    let ukupnoStr = 0;
    niz.forEach(k=>{
        ukupnoStr += k.brojStrana;
    });
    return ukupna / ukupnoStr
}

console.log(`Jedna stranica knjige u proseku kosta: ${prosecnaStranica(arrknjige)}`);
