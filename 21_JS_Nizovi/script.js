//Odrediti broj parnih elemenata sa neparnim indeksom.

let nizBrojeva = [10,16,15,17,12,-14];
let brElem = 0;
for(let i=0; i<nizBrojeva.length; i++){
    //element - nizBrojeva [i]
    //index - i
    if(nizBrojeva[i]%2==0 && i%2!=0){
        brElem++;
    }
}
console.log(brElem);

//13.Izračunati sumu elemenata niza sa parnim indeksom.
nizBrojeva=[10,16,15,17,12,-14];
let suma = 0;

for(let i=0; i<nizBrojeva.length; i++){
    if(i%2==0){
        suma+=nizBrojeva[i];
    }
}
console.log(suma);

//14. Promeniti znak svakom elementu celobrojnog niza.
nizBrojeva=[-10,16,-15,17,12,-14];
for(let i=0; i<nizBrojeva.length; i++){
    nizBrojeva[i]*=-1;
}
console.log(nizBrojeva);


//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

nizBrojeva=[-11,16,-15,17,12,-14];

for(let i=0; i<nizBrojeva.length; i++){
    if(nizBrojeva[i]%2!=0 && i%2==0){
        nizBrojeva[i] *=-1;
    }
}
console.log(nizBrojeva);

//16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let namirnice = ["krema", "voce", "povrce", "mleko", "jaja"];
namirnice[0]="sok";

let lista = `<ul>`;
for (let i=0; i<namirnice.length; i++){
    lista += `<li>${namirnice[i]}</li>`;
}
lista += `</ul>`;
namirnice[0] = "hleb"; // hleb se ne prikazuje zato sto je posle for petlje
document.body.innerHTML += lista;

//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let kosarkasi = ['bogdanovic', 'jokic', 'divac', 'doncic'];
let tabela = `<table>`;
for (let i=0; i<kosarkasi.length; i++){
    tabela += `
    <tr>
        <td>${kosarkasi[i]}</td>
    </tr>
    `
}
tabela += `</table>`;
document.body.innerHTML += tabela;

//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let slike = ["avatar_female1 - Copy.png", "avatar_female2 - Copy.png", "avatar_male1.png", "avatar_male2 - Copy.png"]
for (let i=0; i<slike.length; i++){
    document.body.innerHTML += `<img src="${slike[i]} ">`;
}


//19. Ispisati dužinu svakog elementa u nizu stringova. 
namirnice = ["krema", "voce", "povrce", "mleko", "jaja"];
for (let i=0; i<namirnice.length; i++){
    console.log(namirnice[i].length);
}

//20. Odrediti element u nizu stringova sa najvećom dužinom.
namirnice = ["krema", "voce", "povrce", "mleko", "jaja"];
let max = namirnice[0].length;
let broj=namirnice[0];
for (let i=0; i<namirnice.length; i++){
    if(max <= namirnice[i].length){
        max = namirnice[i].length;
        broj = namirnice[i];
    }
}
console.log(broj);

//21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let stringovi = ['ana', 'milica', 'jelena'];
let sumaDuzina=0;
for(let i=0; i<stringovi.length; i++){
    sumaDuzina += stringovi[i].length;
}
let arSrDuzina = sumaDuzina / stringovi.length;
console.log(arSrDuzina);

let brNatprosecnih = 0;
for(let i=0; i<stringovi.length; i++){
   if ( stringovi[i].length > arSrDuzina){
       brNatprosecnih++;
   }
}
console.log(brNatprosecnih);

//22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
//I nacin
stringovi = ['milos', 'milan', 'goran', 'Aleksandar'];

// rec.includs("a") - vraca true ili false
let brStringovaSaSlovomA=0
for(let i=0; i<stringovi.length; i++){
    let rec = stringovi[i];
    if(rec.includes("a") || rec.includes("A")/*==true*/){
        brStringovaSaSlovomA++;
    }
}
console.log(brStringovaSaSlovomA);

//II nacin
let brStringovaSaSlovomA2=0
for(let i=0; i<stringovi.length; i++){ // po recima u nizu
    let rec = stringovi[i];
    for(let j =0; j<rec.length; j++){ // po slovima u reci
        if(rec[j]=="a" || rec[j]=="A"){
            brStringovaSaSlovomA2++;
            break; //umesto break moze i j=rec.length;// da ne broji u Aleksandar sva a, nego prekida jer je nasao jedno a
        }
    }
}
console.log(brStringovaSaSlovomA2);



