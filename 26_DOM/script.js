
////////////////////////////
//DOM

//U DOM-u svaki HTML element je jedan JS objekat

console.log(document);
console.log(typeof document);

console.log(document.URL); // ispisuje STRING
console.log(document.body); // OBJEKAT iz DOM stabla
console.log(document.documentElement); // OBJEKAT iz DOM stabla

console.log(document.anchors); // HTMLCollection
console.log(document.links);// HTMLCollection

let r1=document.getElementById('div1');
console.log(r1); //objekat koji ima navedeni ID

let r2=document.getElementsByClassName("container");
console.log(r2);

let r3=document.getElementsByTagName("div");
console.log(r3);

let r4=document.getElementsByName("link");
console.log(r4);

//prolazak kroz elemente HTMLCollection FOR petljom

for(let i=0; i< r2.length; i++){
    console.log(r2[i]);
}

//moze se GTMLCollection konvertovati u Array, pa onda za Array koristiiti forEach petlja
let r2array = Array.from(r2);
r2array.forEach(obj=>{
    console.log(obj);
});

//elementima nod liste moze se pristupiti i preko FOR i preko FOREACH petlje
r4.forEach(obj =>{
    console.log(obj);
});

for(let i = 0; i < r4.length; i++) {
    console.log(r4[i]);
}

let r5 = document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem=>{
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7);


//document.getElementsByName("link")
let r8 = document.querySelectorAll("[name='link']");
console.log(r8);

//document.getElementById("div1")
let r9 = document.querySelector("#div1");//uvek vraca objekat
console.log(r9);

//let r10 = document.querySelectorAll("#div1");//uvek vraca nodelist
//console.log(r10);

let prvip=document.querySelector('p');
console.log(prvip);

//Dohvatiti prvi div tag sa klasom „error“.
let prvidiv=document.querySelector("div.error");
console.log(prvidiv);

//Dohvatiti poslednji red u tabeli.
let poslRedTab=document.querySelector("tr:last-child");
console.log(poslRedTab);

//Dohvatiti sve linkove na stranici.
let sviLink=document.querySelectorAll("a");
console.log(sviLink);

//menjanje elemenata iz HTML
console.log(r1.id);
console.log(r1.href);
console.log(r1.innerHTML);
//r1.innerHTML = "Sadrzaj div elementa je dodat iz JS-a";
r1.innerHTML += "Sadrzaj div elementa je dodat iz JS-a" ;


let prviLink = document.querySelector("a");
prviLink.href = "http://www.wikipedia.com";

//prviLink.setAttribute('target', '_blank');
prviLink.target="_blank";
prviLink.setAttribute('href', 'http://www.wikipedia.org');
prviLink.innerHTML = "Wikipedia";
prviLink.style.color = "red";
prviLink.style.backgroundColor = "blue";
prviLink.style.textDecoration = "none";
prviLink.style.border = "3px solid black";


/*prviLink.setAttribute('style', 'color:red; background-color:blue; text-decoration:none; border:3px solid black');

r1.style.color = "green";*/

/*// postaviti crvfeni boreder svim linkovima na stranici
r7.forEach(link =>{
    link.style.border = "3px solid red";
});*/

//drugi nacin
let linkovi = document.getElementByTagName('a');
for(let i=0; i<linkovi.length; i++){
    linkovi[i].style.border = "3px solid green";
}

//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

let sviParagrafi = document.querySelectorAll('p');
for(let i=0; i<sviParagrafi.length; i++){
    sviParagrafi[i].innerHTML += "VAZNO!!!";
}

//Svim divovima na stranici sa klasom “error”, dodati po jedan naslov najveće veličine sa tekstom “Greška!”.

let divError = document.querySelectorAll("div.error");
for (let i = 0; i < divError.length; i++) {
    divError[i].innerHTML = `<h1>Greska!</h1>` + divError[i].innerHTML;
}

//Neka je 𝑛 broj paragrafa u datom dokumentu.U svakom 𝑖 - tom paragrafu dodati broj 𝑖 ^ 2, za svako 𝑖 = 1, 2, …, 𝑛.

for(let i=0; i<sviParagrafi.length; i++){
    sviParagrafi[i].innerHTML += (i+1)**2;
}
sviParagrafi.forEach((par,i)=>{
    par.innerHTML += (i + 1) ** 2;
});

//Svim slikama dodati alternativni tekst
let sveImg = document.querySelectorAll("img");
for (let i = 0; i < divError.length; i++) {
sveImg[i].alt = "User";
}

//Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.

for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].style.color = "violet";
}

//Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju.
let sviParniPar = document.querySelectorAll("p:nth-child(even)");
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].style.backgroundColor = "green";
}
let sviNeparPar = document.querySelectorAll("p:nth-child(odd)");
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].style.backgroundColor = "red";
}

//Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text - decoration na none.Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.


    linkovi.setAttribute('style', 'padding:5px; font-size:18px; text-decoration:none');

