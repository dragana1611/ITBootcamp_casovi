function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div/*promenljiva div a ne div iz html*/ = document.getElementById('container');
    //div.innerHTML = poruka; ako se brise stari sadrzaj div-a
    div.innerHTML +=  poruka + "<br>";
}

function ispisNiza(niz,cb){// cb - callback f-ja
    let poruka = ""; //konkatenacija stringova , pocinje od praznog dtringa
    for (let i=0 ; i<niz.length; i++){
        poruka += niz[i]+ " ";
    }
    cb(poruka); //poziv callback f-je
}

let a=[5,-9,11,9,4];
let b = ['vuk', 'nikola', 'jelena', 'jelena', 'anita'];
ispisNiza(a, ispisKonzola); // pozi f-je ispisNiza
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);

// pozivi f-ja preko anonimnih callback f-ja

ispisNiza(a, par => {
    console.log(par);
});

ispisNiza(a, function (par){
    let div=document.getElementById('container');
    div.innerHTML += par + "<br>";
});


// forEach petlja
a.forEach(e => {
    console.log(`Element niza je ${e}`);
});

b.forEach((e,i)=>{
console.log(`element ${e} sa indeksom ${i}`)
});

// ispis elemenata niza sa parnim indeksom

b.forEach((e,i)=> {
    if(i%2==0){
        console.log(`element ${e} ima paran indeks`);
    }
});

//2. Odrediti zbir elemenata celobrojnog niza.
a=[1,-2,15,-10];
let suma=0;
function zbir(suma){
    suma+=a[i];
}

a.forEach(s => {
    console.log(`suma elemenata je ${suma+=s}`);
})

//3.Odrediti proizvod elemenata celobrojnog niza.

a=[1,-2,15,-10];
let proizvod=1;
function zbir(proizvod){
    proizvod *= a[i];
}

a.forEach(p => {
    console.log(`proizvod elemenata je ${proizvod *= p}`);
})

//4.Odrediti srednju vrednost elemenata celobrojnog niza.
let brojac=0;
suma=0;

function zbir(proizvod){
    let srVr=suma/brojac;
}
a.forEach(arSr=>{
    console.log(`srednja vrednost je ${arSr}`);
}); 


//2.
let zbirNiza = niz =>{
    let zbir = 0;
    niz.forEach(elem =>{
        zbir += elem;
    });
    return zbir;
}
console.log(zbirNiza(a));

//4. sr vrednost
let srVrNiza = niz => {
    let srVr = 0;
    niz.forEach(elem => {
        srVr += elem;
    });
    srVr=srVr/niz.length;
    return srVr;
}
console.log(srVrNiza(a));

//5.max vrednost
let maxNiz = niz =>{
    let max=niz[0];
    niz.forEach(elem => {
        if(elem > max){
            max=elem;
        }
    });
    return max;
}
let c=[15,7,8,15,15,0,9,15,0,2];
console.log(maxNiz(c));

//napisati f-ju koja vraca broj elmenata sa : 1)max vrednoscu, 2)min vrednoscu
/*
let brojMaxNiz = niz=>{
    let max=maxNiz(niz);
    let broj=0;
    niz.forEach(elem=>{
        if(elem==max){
            broj++;
        }
    });
    return broj;
}

let brojMinNiz=niz=>{
    let min=minNiz(niz);
    let broj=0;
    niz.forEach(elem =>{
        if(elem==min){
            broj++;
        }
    });
    return broj;
}*/
let brojSvojstvoNiz = (niz, svojstvo)=>{
    let s=svojstvo(niz);
    let broj =0;
    niz.forEach(elem =>{
        if(elem==s){
            broj++;
        }
    });
    return broj;
}

console.log(`broj elemenata sa max vrednoscu jednak je: ${brojSvojstvoNiz(c,maxNiz)}`);

//console.log(`broj elemenata sa min vrednoscu jednak je: ${brojSvojstvoNiz(c,minNiz)}`);

