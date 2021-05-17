function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div/*promenljiva div a ne div iz html*/ = document.getElementById('container');
    //div.innerHTML = poruka; ako se brise stari sadrzaj div-a
    div.innerHTML +=  poruka + "<br>";
}

function ispisNiza(niz,cb){// cb - callback f-ja
    let poruka = ""; //konkatenacija stringova , pocinje od praznog stringa
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

function zbir(suma){
    suma=0;
    a.forEach(s => {
    suma+=s;
    });
    return suma;  
}
console.log(`suma elemenata je ${zbir(a)}`);

//3.Odrediti proizvod elemenata celobrojnog niza.

a=[1,-2,15,-10];

function proizvodElem(niz){
    proizvod=1;
    a.forEach(elem =>{
        proizvod *= elem;
    });
    return proizvod;
}
console.log(`proizvod elemenata je ${proizvodElem(a)}`);

//4.Odrediti srednju vrednost elemenata celobrojnog niza.
a=[1,-2,15,-10];

function srVr(niz){
    let brojac=0;
    suma=0;
    a.forEach(elem=>{
        brojac++;
    });
    return zbir(a)/brojac;
}
console.log(`srednja vrednost je ${srVr(a)}`);

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

//6. MIN element niza
a = [1, -2, 15, -10];
function minElem(niz) {
    let min=a[0];
    a.forEach(elem=>{
        if(elem<min){
            min=elem;
        }
    });
    return min;
}
console.log(`minimalni element niza je ${minElem(a)}`);

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.

a = [100, -2, 15, -10];
function maxIndex (niz){
    let max = niz[0];
    let index=0;
    niz.forEach((elem, i)=> {
        if (elem > max) {
            max = elem;
            index=i;
        }
    });
    return index;
}
console.log(`index maximalnog elementa niza je ${maxIndex(a)}`);

//8. Odrediti indeks mminimalnog elementa celobrojnog niza.

a = [1, -2, 15, -10];
function minIndex(niz) {
    let min = niz[0];
    let index = 0;
    niz.forEach((elem, i) => {
        if (elem < min) {
            min = elem;
            index = i;
        }
    });
    return index;
}
console.log(`index minimalnog elementa niza je ${minIndex(a)}`);


//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

a = [1, -2, 15, -10, 5, 8];

srVrNiza = niz => {
    let srVr = 0;
    niz.forEach(elem => {
        srVr += elem;
    });
    srVr = srVr / niz.length;
    return srVr;
}

function veciodSrVr(niz) {
    brojac = 0;
    a.forEach(elem =>{
        if(elem>srVrNiza(niz)){
            brojac++;
        }
    });
    return brojac;
}
console.log(`broj elemenata niza koji su veći od srednje vrednosti je ${veciodSrVr(a)}`);

//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
a = [1, -2, 15, -10];
function pozElem(niz) {
    suma=0;
    a.forEach(elem=>{
        if(elem>0){
            suma += elem;
        }
    });
    return suma;
}
console.log(`zbir pozitivnih elemenata niza je ${pozElem(a)}`);

//11.Odrediti broj parnih elemenata u celobrojnom nizu
a = [1, -2, 15, -10];
function parniElem(niz) {
   brojac=0;
   a.forEach(elem=>{
       if(elem%2 ==0){
           brojac++;
       }
   });
   return brojac;
}
console.log(`broj parnih elemenata niza je ${parniElem(a)}`);

//12.Odrediti broj parnih elemenata sa neparnim indeksom.
a = [1, -2, 15, -10];
function brParElem(niz) {
    brojac=0;
    i=0;
    a.forEach(elem =>{
        if(elem%2 ==0 && i%2!=0){
            brojac++;
        }
    });return brojac;
}
console.log(`broj parnih elemenata sa neparnim indexom je ${brojac}`);

//13.Izračunati sumu elemenata niza sa parnim indeksom.
a = [1, -2, 15, -10];
function sumParInd(niz) {
    suma=0;
    i=0;
    a.forEach(elem =>{
        if(i%2 ==0){
            suma += i;
        }
    });
    return suma;
}
console.log(`Suma elemenata sa parnim indexom je ${suma}`);

//14. Promeniti znak svakom elementu celobrojnog niza.
a = [1, -2, 15, -10];
function menjaZnak(niz) {
    a.forEach(elem=>{
        elem*= -1;
    });
    return a;
}
console.log(`niz sa promenjenim znakovima elemenata je: ${menjaZnak(a)}`);

//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
a = [1, -2, 15, -10, 5, 8];

function znakNepar(niz) {
    i = 0;
    a.forEach(elem => {
        
        if(elem%2!=0 && i%2==0){
            elem *= -1;
        }
    });
    return a;
}
console.log(`niz sa promenjenim znakovima elemenata je: ${znakNepar(a)}`);