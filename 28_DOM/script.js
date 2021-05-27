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

let r1 = document.getElementById('div1');
console.log(r1); //objekat koji ima navedeni ID

let r2 = document.getElementsByClassName("container");
console.log(r2);

let r3 = document.getElementsByTagName("div");
console.log(r3);

let r4 = document.getElementsByName("link");
console.log(r4);

//prolazak kroz elemente HTMLCollection FOR petljom

for (let i = 0; i < r2.length; i++) {
    console.log(r2[i]);
}

//moze se GTMLCollection konvertovati u Array, pa onda za Array koristiiti forEach petlja
let r2array = Array.from(r2);
r2array.forEach(obj => {
    console.log(obj);
});

//elementima nod liste moze se pristupiti i preko FOR i preko FOREACH petlje
r4.forEach(obj => {
    console.log(obj);
});

for (let i = 0; i < r4.length; i++) {
    console.log(r4[i]);
}

let r5 = document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem => {
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7);


//document.getElementsByName("link")
let r8 = document.querySelectorAll("[name ='link']");
console.log(r8);

//document.getElementById("div1")
let r9 = document.querySelector("#div1");//uvek vraca objekat
console.log(r9);

//let r10 = document.querySelectorAll("#div1");//uvek vraca nodelist
//console.log(r10);

let prvip = document.querySelector('p');
console.log(prvip);

//Dohvatiti prvi div tag sa klasom „error“.
let prvidiv = document.querySelector("div.error");
console.log(prvidiv);

//Dohvatiti poslednji red u tabeli.
let poslRedTab = document.querySelector("tr:last-child");
console.log(poslRedTab);

//Dohvatiti sve linkove na stranici.
let sviLink = document.querySelectorAll("a");
console.log(sviLink);

//menjanje elemenata iz HTML
//console.log(r1.id);
//console.log(r1.href);
console.log(r1.innerHTML);
//r1.innerHTML = "Sadrzaj div elementa je dodat iz JS-a";
r1.innerHTML += "Sadrzaj div elementa je dodat iz JS-a";


let prviLink = document.querySelector("a");
prviLink.href = "http://www.wikipedia.com";

//prviLink.setAttribute('target', '_blank');
prviLink.target = "_blank";
prviLink.setAttribute('href', 'http://www.wikipedia.org');
prviLink.innerHTML = "Wikipedia";
prviLink.style.color = "red";
prviLink.style.backgroundColor = "blue";
prviLink.style.textDecoration = "none";
prviLink.style.border = "3px solid black";


prviLink.setAttribute('style', 'color:red; background-color:blue; text-decoration:none; border:3px solid black');

r1.style.color = "orange";

// postaviti crvfeni boreder svim linkovima na stranici
r7.forEach(link =>{
    link.style.border = "3px solid red";
});

//drugi nacin
/*let linkovi = document.getElementByTagName('a');
for (let i = 0; i < linkovi.length; i++) {
    linkovi[i].style.border = "3px solid green";
}*/

//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

let sviParagrafi = document.querySelectorAll('p');
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += "VAZNO!!!";
}

//Svim divovima na stranici sa klasom “error”, dodati po jedan naslov najveće veličine sa tekstom “Greška!”.

let divError = document.querySelectorAll("div.error");
for (let i = 0; i < divError.length; i++) {
    divError[i].innerHTML = `<h1>Greska!</h1>` + divError[i].innerHTML;
}

//Neka je 𝑛 broj paragrafa u datom dokumentu.U svakom 𝑖 - tom paragrafu dodati broj 𝑖 ^ 2, za svako 𝑖 = 1, 2, …, 𝑛.

for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += (i + 1) ** 2;
}
/*sviParagrafi.forEach((par, i) => {
    par.innerHTML += (i + 1) ** 2;
});*/

//Svim slikama dodati alternativni tekst
let sveImg = document.images;
for (let i = 0; i < sveImg.length; i++) {
    sveImg[i].alt = "User";
    sveImg[i].setAttribute('style', 'height:100px');
}


//Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
sviParagrafi=document.querySelectorAll('p');
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].style.color = "darkviolet";
}

//Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju.

let sviParniPar = document.querySelectorAll("p:nth-child(even)");// nije dobro za parne i neparne elemente zato sto ako su child elementi ne nastavlja se prethodni redosled vec pocinje ispocetka!!!!!
for (let i = 0; i < sviParniPar.length; i++) {
    sviParniPar[i].style.backgroundColor = "green";
}

let sviNeparPar = document.querySelectorAll("p:nth-child(odd)");
for (let i = 0; i < sviNeparPar.length; i++) {
    sviNeparPar[i].style.backgroundColor = "red";
}

//Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text - decoration na none.Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
let sviLinkovi = document.anchors;
for (let i = 0; i < sviLinkovi.length; i++) {
    sviLinkovi[i].setAttribute('style', 'padding:5px; font-size:18px; text-decoration:none');
    if(i%2==0){
    sviLinkovi[i].style.color='purple';
    sviLinkovi[i].style.backgroundColor = 'green';
    }
    else{
    sviLinkovi[i].style.color = 'white';
    sviLinkovi[i].style.backgroundColor = 'blue';
    }
}
//Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
let sveImgPng = document.querySelectorAll("img");
for (let i = 0; i < sveImgPng.length; i++) {   
    if (sveImgPng[i].src.includes(".png") || sveImgPng[i].src.includes(".PNG")){
        sveImgPng[i].style.border=" 2px solid red";
    }
}

//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
// sviLinkovi = document.anchors;
// for (let i = 0; i < sviLinkovi1.length; i++) {
//     if(sviLinkovi[i].target == "_blank"){
//         sviLinkovi[i].target == "_top";
//     }
//     else if (sviLinkovi[i].target != "_blank" || sviLinkovi1[i].target == " "){
//         sviLinkovi[i].target == "_blank";
//     }
// }
/*linkovi = document.querySelectorAll('a'){
    linkovi.forEach(linl=>{
       if(link.target==="_blank"){
           link.target="top";
       }
       else{
           link.target="blank";
       }
    });
}
*/

/*//Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
Svako u novom linku.Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
U listi kao stavke liste.Naizmenično stavke liste obojiti sa dve različite boje.
U jednoj koloni tabele.Postaviti okvir, marginu i pading ćelijama tabele.*/

let triImena = ['Iva', 'Ana', 'Mia', 'Vuk', 'Sava'];
for(let i =0; i<triImena.length; i++){
    if(triImena[0]=="S"){
        document.body.innerHTML += `<a href="#" target="_blank">${triImena[i]}</a><br>`
    }
    else{
        document.body.innerHTML += `<a href="#">${triImena[i]}</a><br>`;
    }  
}
//II nacin
// triImena.forEach(ime=>{
//     if(ime.startsWith('S')){
//         //if(ime[0]=="S")
//         document.body.innerHTML += `<a href="https://www.google.com" target="_blank">${triImena[i]}</a><br>`
//     }
//     else{
//         document.body.innerHTML += `<a href="#">${triImena[i]}</a><br>`;
//     }
// });


//U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.

let result = `<ul>`;
triImena.forEach((ime, i)=>{
    if(i%2==0){
        result += `<li style="color:blue"> ${ime}</li>`;
    }
    else{
        result += `<li style="color:red"> ${ime}</li>`;
    }
});
result += `</ul>`;
document.body.innerHTML+=result;

//U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
let tabelaIme = `<table border="2px solid darkgreen;" style="margin:20px;">`;
for (let i = 0; i <triImena.length; i++) {
    tabelaIme +=
    `
    <tr>
    <td style="padding:5px;text-align:center;"><a href = "#"> ${ triImena[i] }</a></td>
    </tr>
    ` 
}
tabelaIme +='</table>';
document.body.innerHTML += tabelaIme;


///////////////////////////////////
// dohvatanje roditeljskog cvora
linkovi = document.querySelectorAll("a");
linkovi.forEach(link=>{
    console.log(link.parentNode);
    link.parentNode.style.border = "2px solid blueviolet";
});

//dohvatanje deteta nekog cvora
let prviDiv = document.querySelector("div.container");
//console.log(prviDiv.childNodes[i]);
prviDiv.childNodes.forEach(child=>{
    console.log(child);
});
 
let n= prviDiv.childNodes.length;
for(let i=0; i<n; i++){
    console.log(prviDiv.childNodes[i]);
}
let link1 = prviDiv.childNodes[2];
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);
//link1.nextSibling.nextSibling.style.fontSize="24px";

//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

sviParagrafi = document.querySelectorAll('p');
for(let i=0; i<sviParagrafi.length; i++){
    if(i%2==0){
        sviParagrafi[i].classList.add('error');
        //sviParagrafi[i].className += ' error';       
    }
    else{
        sviParagrafi[i].classList.add('success');
        //sviParagrafi[i].className += ' success';
    }
}

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

sviParagrafi = document.querySelectorAll('p');

for (let i = 0; i < sviParagrafi.length; i++) {
    if (i % 3 == 1) {
        sviParagrafi[i].style.fontSize = '15px';
    }
    else if (i % 3 == 2){
        sviParagrafi[i].style.fontSize = '20px';
    }
    else{
        sviParagrafi[i].style.fontSize = '25px';
    }
}

//Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success.Ostale klase paragrafa ne modifikovati.

sviParagrafi = document.querySelectorAll('p');
for (let i = 0; i < sviParagrafi.length; i++) {
    if (sviParagrafi[i].textContent.includes('success')){
        //sviParagrafi[i].className += ' success';
        sviParagrafi[i].classList.add('success');
    }
    if (sviParagrafi[i].textContent.includes('error')) {
        //sviParagrafi[i].className += ' error';
        sviParagrafi[i].classList.add('error');     
    }
}
