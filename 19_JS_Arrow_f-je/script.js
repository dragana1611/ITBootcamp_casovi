// anonimne f-je
let suma=function(a,b){ //deklaracija anonimne f-je
    return a+b;
}
console.log(suma(3,4));
 

// arrow f-je   rade u kontekstu bloka u kojem su definisane

let suma3 = (a,b)=>{
    return a+b;
}
console.log(suma3(5,6));

let hello = ()=>{
    console.log("Hello world");
}

hello();
hello();

let korisnika = (ime)=>{
    console.log(`Zdravo ${ime}!`);
}
korisnika("Stefan");
korisnika("Jelena");


let korisnik=(ime,godine)=>{
    if(godine<18){
        let ispis="korisnik " + ime +" je maloletno lice";
        document.body.innerHTML += `<p style="color:green">${ispis}</p>`;
    }
    else{
        let ispis = "korisnik " + ime +" je punoletno lice";
        document.body.innerHTML += `<p style="color:blue">${ispis}</p>`;
    }
}
korisnik("Dragana",50);
korisnik("Petar", 7);

//1.	Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
let pozdrav = (ime,prezime=`strance`)=>{
    console.log(`Zdarvo ${ime} ${prezime}!!!`);
}
pozdrav("Jelena");
pozdrav ("Jelena "," Matejic" );

//2.	Napisati funkciju zbir koja računa zbir dva realna broja.
//Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

let zbir=(a,b)=>{
    return a+b; // -, *, /
}
zbir(4.5, -1.7);
console.log(zbir(4.5, -1.7));

//3.	Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan=(n)=>{
    if(n%2==0){
        return false;
    }
    else{
        return true
    }
}
neparan(3);
console.log(neparan(3));

//4.	Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a,b)=>{
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
maks2 (4,-2);
console.log(maks2 (4,-2));

let maks4 = (a,b,c,d)=>{
    return maks2(maks2(a,b), maks2(c,d));
   
}

maks4 (2,6,-7,9);
console.log(maks4 (2,6,-7,9));

// 5.
let slika=(putanja)=>{
    document.body.innerHTML += `<img src="${putanja}">`;
}
slika("02.JPG");

//6.
let color=(a)=>{
    document.body.innerHTML += `<p style="color:${a}"> Ovo je paragraf obojen preko arrow funkcije</p>`;
}
color("red");

//5. drugi nacin

slika = (putanja) => {
    return `<img src="${putanja}">`;
}

let slika2 = (putanja) => `<img src="${putanja}">`;
document.body.innerHTML += slika("02.JPG");
document.body.innerHTML += slika2("02.JPG");


// treci nacin
let slika3 = putanja => `<img src="${putanja}">`;
document.body.innerHTML += slika3("02.JPG");

//4. drugi nacin

let max2 = (a,b) =>{
    return (a>b)?a:b;
}
 max2 = (a,b) => (a>b)? a:b;
console.log(max2(3,4));
console.log(max2(4,3));

let max4 = (a,b,c,d) => maks2(maks2(a,b), maks2(c,d));
console.log(max4(3,4,-5,7));

let neparan2 = n => (n%2==1);
console.log(neparan2(7));
console.log(neparan2(8));

//15.
//I nacin
let d=15000;
let plataUk;
let povisica = (n,a)=>{
    
    plataUk = a+ (n-1)* (a+d);
    return plataUk;
}
povisica(6, 50000);
console.log(povisica(6, 50000));

//II nacin
let povisica1 = (n,a)=> (a + (n-1) * (a + d));
 
povisica(6, 50000);
console.log(povisica(6, 50000));

//16.
let t;
let p;
let n;
let polazak;
if (t<p || (p+n)<=t){
    console.log(`Takmicar treba da krene cim pocne merenje vremena `); 
}
else{
     polazak = (t,p,n) => (n-t+p);
}
polazak(15,10,12);
console.log(`Takmicar treba da krene ${polazak(15,10,12)} [sec] nakon početka merenja vremena `);
