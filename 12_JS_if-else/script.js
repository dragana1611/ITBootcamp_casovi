//10.
let dat1 = "2021-04-23";
let dat2 = "2021-05-01";
//treba voditi racuna kakvu komparaciju vrsiti izmedju 2 promenljive. ide od opsteg ka posebnom
if(dat1<dat2){
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if(dat2<dat1){
    console.log(`${dat2} je bio pre ${dat1}`);
}
else{
    console.log(`${dat1} i ${dat2} su isti`);
}

// drugi nacin

let dan1 = 01;
let mes1 = 01;
let god1 = 2020;
let dan2 = 01;
let mes2 = 05;
let god2 = 2021;

if(god1<god2){
    console.log("datum 1 je raniji");
}
else if (god2<god1){
    console.log("datum 2 je raniji");
}
//posto su godine iste proverano za mesece
else if(mes1<mes1){
    console.log("datum 1 je raniji");
}
else if ( mes2<mes1){
    console.log("datum 2 je raniji");
}
//posto su meseci iti proveravamno za dane
else if(dan1<dan2){
    console.log("datum 1 je raniji");
}
else if(dan2<dan1){
    console.log("datum 2 je raniji");
}
// posto su je sve isto
else{
  console.log("datumi su isti");
}  

//////////////////////

let stepeni = -10;
if(stepeni<0){
    console.log("ispod 0 stepni");
}
if (stepeni<10){
    console.log("ispod 10stepeni");

}
if (stepeni<20){
    console.log("ispod 20 stepeni");
}
else {
    console.log("20 i vise stepeni");
}


if(stepeni<0){
    console.log("ispod 0 stepni");
}
else if (stepeni<10){
    console.log("ispod 10stepeni");

}
else if (stepeni<20){
    console.log("ispod 20 stepeni");
}
else {
    console.log("20 i vise stepeni");
}


//poeni

let poeni = 81;

if(poeni>100)
console.log("poeni ne mogu uzimati vrednost vecu od 100");
else if(poeni >=91){
    console.log("ocena 9")
}
else if(poeni >=81){
    console.log("ocena 8")
}
else if(poeni>71){
    console.log("ocena 7")
}

//ugnezdjeno grananje

let pol = "m";
let god = 32;
if (pol == "z"){
    console.log("osoba zenskog pola");
    if(god>=18){
        console.log("osoba je punoletna");
    }
    else{
        console.log("osoba je maloletna");
    }
}
else{
    console.log("ososba muskog pola");
    if(god>=18){
        console.log("osoba je punoletna");
    }
    else{
        console.log("osoba je maloletna");
    }
}

//12.
let p1 = 14;
let k1 =20;
let p2 = 8;
let k2 = 16;

if(k1</*=*/p2){
    console.log("NE");
}
else if (k2<p1){
    console.log("NE");
}
else {
    console.log("DA");
}

//deljivost
let broj1 = 5;
let broj2 = 3;
if(broj1%broj2==0){
    console.log(`${broj1} je deljiv brojem ${broj2}`);
}
    console.log(`${broj1} je nije deljiv brojem ${broj2}`)

//13
let br = 67;
if(br%2==0){
    console.log(`Broj ${br} je paran`);
}
else{
    console.log(`Broje ${br} je neparan`);
}
//14
     br = 67;
if(br%3==0){
    console.log(`Broj ${br} je deljiv sa 3`);
}
else{
    console.log(`Broje ${br} nije deljiv sa 3`);
}

//15.

let s = 98;
let g = 23;
let max_b = s;


if(g>max_b){
    max_b = g;
    max_b - s;
    document.body.innerHTML += `<p>Razlika brojeva je ${max_b} - ${s} = ${max_b - s}</p>`;
}
else{
    max_b - g;
    document.body.innerHTML += `<p>Razlika brojeva je ${max_b} - ${g} = ${max_b - g}</p>`;
}

//16

let br1 = 45;
if(br1<=0){
    console.log(`Broj ${br1} je manji od 0`);
    br1=br1-1;
    console.log(`Prethodnik broja ${br1} je broj ${br1-1}`);
}
else if (br1 > 0) {
    console.log(`Broj ${br1} je veci od 0`);
    br1=br1+1;
    console.log(`Sledbenik broja ${br1} je broj ${br1+1}`);
}
else{
    console.log("Pogresan unos");
}

//17
let prvi = 12;
let drugi = -27;
let treci = -55;
// min
let min = prvi;
if(drugi < min){
     min = drugi;
}
if(treci < min){
    min = treci;
}
console.log(`Najmanji broj je ${min}`);
// max
let max = prvi;
if(drugi > max){
    max = drugi;
}
if(treci > max){
    max = treci;
}
console.log(`Najveci broj je ${max}`);
// srednji broj
let srednji = ((prvi + drugi + treci)-(min + max));
console.log(`Srednji broj je ${srednji}`);




//18
let a = 7.00;
let ceo = a % 1;
if ( ceo == 0 ) {
    console.log(`${a} je ceo broj`);
}
else {
    console.log(`${a} nije ceo broj.`);
}

//20
let c = 23;
let d = 16;
let maxim = c;

if(d>c){
    console.log("d je vece od c");
    maxim = d;
    if (maxim % 2 ==0){
        console.log("d je vece od c i pran je broj");  
    }
    else{
        console.log("d je vece od c i  neparan je broj");
    }
}
else {
    console.log("c je vece od d");
    if(c%2 == 0) {
        console.log("c je vece od d i paran je broj");
    }
    else {
        console.log("c je vece od d i neparan je  broj");
    }

}

//Izdvajanje cifara iz broja

let xyz=453;
let x=Math.floor(xyz/100);
console.log(x);
let y =Math.floor( (xyz/10)%10);
console.log(y);
let z=xyz%10;
console.log(z);
let broj= z*100+x*10+y;
console.log(broj);


// Sabiranje vremenskih intervala izrazenih u h-m-s
let sati1 = 2;
let min1 = 12;
let sek1 = 45;
let sati2 = 7;
let min2 = 40;
let sek2 = 40;
  
let sek = (sek1 + sek2) % 60;
console.log(sek);
let prenos = Math.floor((sek1 + sek2) / 60);
console.log(prenos);
let minut = (min1 + min2 + prenos) % 60;
console.log(minut);
    prenos = Math.floor((min1 + min2 + prenos) / 60);
    console.log(prenos);
let sati = sati1 + sati2 + prenos;
console.log(sati);
console.log(`tacno vreme je ${sati}:${minut}:${sek}`);


//max 3 broja 
let j=98;
let k = -11;
let l = 22;
//let maxi;

if(j >= k && j >= l)
        maxi = j;
    else if(k >= j && k >= l)
        maxi = k;
    else
        maxi = l;
        console.log(maxi);
    