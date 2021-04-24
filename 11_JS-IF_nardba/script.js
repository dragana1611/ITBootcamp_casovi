let a=7;
let b=8;
if(a==b){
    console.log(`a i b imaju jednake vrednosti`);
}
else{
    console.log(`a i b nemaju jednake vrednosti`);
}

if(a!=b){
    console.log(`a i b nemaju jednake vrednosti`);
}
else{
    console.log(`a i b imaju jednake vrednosti`);
}
// dodavanje html elementa iz scrpt fajla
document.body.innerHTML = "<h1>Ovo je <i>if - else</i> naredba grananja</h1>" ;
document.body.innerHTML += "<h3>Zadaci</h3>";
document.body.innerHTML += "<p>"; //automatski zatvara p
document.body.innerHTML += "Zadaci za vezbanje"; // obican txt, nije u paragrafu
document.body.innerHTML += "</p>"; // automatski otvara p

let v = 2021;
document.body.innerHTML += 
`<p>
    Hello....
    <span>worlod</span>
    Godina je ${v} :)
</p>
<p>
    
    Godina je ${v} :)
</p>`;    
let slika = "rose.png";
document.body.innerHTML += `<img src="${slika}">`;





//1. zadatak
    a = 56;
    b = 28;
if (a > b){
    console.log(`Broj ${a} je veci od broja ${b}`);
}
else{
    console.log(`Broj ${a} je manji od broja ${b} `);
}

//2. zadatak
let T=-28;
if(T>=0){
    console.log(`Temperatura ${T} je u plusu`);
}
else{
    console.log(`Temperatura ${T} je u minusu`);
}
//3. zadatak
let pol="muski";

if (pol=="muski" ){
   document.body.innerHTML +=`<img src="avatar_male1.png">` ;
}
else{
    document.body.innerHTML += `<img src="avatar_female1.png">`;
}

// 4.
let datum = new Date();
let trenutnoSati = datum.getHours();
console.log(trenutnoSati);

if (trenutnoSati<12 || trenutnoSati>24){
    console.log("jutro je");
}
    if(trenutnoSati>=12 || trenutnoSati<=18){
    console.log("popodne je");
}
if(trenutnoSati>18 || trenutnoSati<=24){
    console.log("vece je");
}



//5.
let gRodjenja=1999;
let god = datum.getFullYear();
console.log(god);
if(god-gRodjenja>=18){
    console.log("osoba je punoletna");
}
else{
    console.log("osoba je maloletna");
}


//6.
let j=56;
let k=123;
let l=-23;
let max=j;
if(k>max){
    max=k;
}
if(l>max){
    max=l;
}
console.log(`najveci broj je ${max}`);




let broj = -5;
if(broj<0){
    console.log("broj je manji od nule");
}
else if(broj==0) {
    console.log("broj je jednak nuli");
}
else{
    console.log("broj je veci od nule");
}
console.log("KRAJ!");


let ime = "jelena";
let brSlova = ime.length;
if(brSlova>10){
    console.log("dugacko ime");
}
else {

    console.log("nije dugacko ime");
}


//8.
let dan=datum.getDay();
console.log(dan);
if (dan !=0 || dan !=6){
    console.log("radni je dan");
}
else {
    console.log("vikend je");
}

//9.
let vreme = datum.getHours();
console.log(vreme);
if(vreme>24 || vreme<12){
    console.log('dobro jutro');
}
else if(vreme==12 || vreme<=18){
    console.log("dobar dan");
}
else{
    console.log("dobro vece");
}


//11.

trenutnoSati = datum.getHours();
if(trenutnoSati>=9 && trenutnoSati<=17){
    console.log("Firma radi");
}
else{
    console.log("firma ne radi");
}

trenutnoSati = datum.getHours();
if(trenutnoSati<9 || trenutnoSati>=17){
    console.log("Firma ne radi");
}
else{
    console.log("firma radi");
}


//10.
let dat1=datum.getDate();
console.log(dat1);


//12.

let D1_1=9;
let D1_2=17;
let D2_1=13;
let D2_2=20;

if(D2_1>=D1_1 && D2_1 <= D1_2){
    document.body.innerHTML += `<h1>DA</h1>`;
}
else{
    document.body.innerHTML += `<h1>NE</h1>`;
}

//13.

let x=789;
if(x%2==0){
    console.log(`Broj ${x} je paran`); 
}
else{
    console.log(`Broj ${x} je neparan`);
}

//14.

let y=789;
if(x%3==0){
    console.log(`Broj ${y} je deljiv sa 3`); 
}
else{
    console.log(`Broj ${y} je deljiv sa 3`);
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