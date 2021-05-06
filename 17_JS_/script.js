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

 /*function korisnik(ime, prezime){

 }*/
 



