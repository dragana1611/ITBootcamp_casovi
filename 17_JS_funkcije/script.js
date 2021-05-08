let pr=4;
let pr2 =50;
if(pr<10){
        pr = "0" + pr;
}
if(pr2<10){
    pr2 = "0" + pr2;
}
console.log(pr); //poziv f-je log
console.log(pr2); //poziv f-je log



// telo funkcije

function mojaFunkcija(){
    console.log('Zdarvo svete!');
}
console.log("Neki text pre poziva f-je");
// poziv f-je
mojaFunkcija();
console.log("Neki text posle poziva f-je");
// ponovo poziv f-je
mojaFunkcija();

// def druge f-je

function ispisiText(tekst){
    console.log("Ispisujem tekst: " + tekst); //parametar tekst
}
 //poziv f-je
  ispisiText("ITBootcamp");
  ispisiText('Pera Peric');
  ispisiText(25);

  let x="mika";
  ispisiText(x);
  console.log(x);
 /* console.log(tekst);*/

 let tekst="zika"; //globalna promenljiva
 ispisiText(tekst);
 console.log(tekst); //ovo nije parametar tekst, nego globalna promenljiva tekst

 function korisnik(ime, prezime){
    console.log(`Korisnik: ${ime} ${prezime}`)
 }
 korisnik("Pera","Peric");

 korisnik("Laza, Lazic"); // druga vrednost je undefined

 //napisati f-ju koja ispisuje ime i prezime korisnika koji se prosledjuju kao parametri

 //kao i info da li je prezime korisnika dugacko (vise od 10 karaktera)

 function korisnikPrezime(ime, prezime){
     if(prezime.length > 10){
         console.log(`Korisnik ${ime} ${prezime} ima dugacko prezime`);
     }
     else{
         console.log(`Korisnik ${ime} ${prezime} nema dugacko prezime`);
     }
 }

 korisnikPrezime("Jelena", "Matejic");
 korisnikPrezime("Stefan", "Stanimirovic");

 function korisnikGodine(ime, god){
     if(god>=18){
         console.log(`korisnik ${ime} ima ${god} godina i punoletna je osoba`);
     }
     else {
        console.log(`korisnik ${ime} ima ${god} godina i maloletna je osoba`);
     }
 }
 korisnikGodine("Pera", 29);
 korisnikGodine("Laza", 15);

 function zbir(a,b){
    let rez = a + b;
     console.log(rez);
 }
 zbir (5,10);
 let a=-5;
 let b=10;
 zbir(a,b);

// f-ja koja ispisuje svoja 2 parametra

/*let d=new Date();
let dan = d.getDay();

d.getDay(); // ne ispisuje dan u nedelji vec vraca dan u nedelji
if(dan==6 || dan == 0){

}
else{ //radni dan
*/
 
// f-ja koja VRACA zbir svoja 2 parametra

function zbir2(a,b){
    let rez = a+b;
    return rez;
}

let z=zbir2(5,6);
console.log(`zbir brojeva 5 i 6 je: ${z}`);
console.log(` sum of numbers 5 i 6 is equal to: ${z}`);

 if(z>=0){
 console.log(`zbir je nenegativan broj`);
 }
 else{
    console.log(`zbir je negativan broj`);  
 }

 if(zbir2(-5,-6)>=0){
     console.log("zbir brojeva -5 i -6 je nenegativan broj");
 }
 else{
    console.log("zbir brojeva -5 i -6 je negativan broj");
 }

 let s= zbir2(5,8)+zbir2(8,9);
 //         13    +     17
 if(s%2==0){
     console.log("zbir ova cetiri broje je paran");
 }  
 else{
    console.log("zbir ova cetiri broje je neparan"); 
 }

 function proizvod(a,b){
     return a*b;
     //console.log("Hello world"); - sve komande posle return  nece biti izvrsene
 }
 // return ima dvojaku ulogu
 // prva vraca vrednost f-ji u kojoj se nalazi
 // druga prekida izvrsenje f-je

console.log(proizvod(5,6));

// zadatak 4
function maxBr(a,b){
    if(a>b){
        return max = a;
    }
    else {
        return max = b;
    }
    
}
console.log(`maksimalan broje je ${maxBr(-2, 5)}`);

let c= 100;
let d=1000;
let e=45;
let f=-8;
let g= maxBr(maxBr(c,d), maxBr(e,f));
console.log(`maksimalan broj je ${g}`);

//3. nacin
function max4n(a,b,c,d){
    let m1=max2(a,b);
    let m2=max2(m1,c);
    let m3=max2(m2,d);
    return m3;
}

//zadatak 3.
function neparanBr(n){
    if(n%2!=0){
        return true;
    }
    else{
        return false;
    }
}
let m =18;
neparanBr(16);
console.log(neparanBr(m));
if(neparanBr(m)){
    console.log(`broje je neparan`);
}
else{
  console.log(`broje je paran`)  ;
}

// zadatak 5.
function slika(putanja){
    document.body.innerHTML += `<img src="${putanja}">`;
}
slika("02.JPG");

//6. 

function color(a){
    document.body.innerHTML += `<p style="color:${a}"> Ovo je paragraf obojen preko funkcije</p>`;
}
color("red");


/*//8
function deljivSaTri(n){
    {
        if(n%3==0)
    }
}
n=20;
m=10;
i;
for(i=n; i<m; i++)*/