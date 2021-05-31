// Dodati novi div tag dokumentu.
// Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

// U ul listi zameniti drugu stavku liste.
// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika

let stariDiv0 = document.getElementById("div0");
let noviDiv = document.createElement('div');
stariDiv0.appendChild(noviDiv);

let lista = document.createElement('ul');

let liTag1 = document.createElement('li');
//liTag1.write('Ovo je tekst li taga koji sam dodao')
let textTag1 =document.createTextNode("Ovo je PRVI liTag");
liTag1.appendChild(textTag1);
lista.appendChild(liTag1);

// let liTag1 = document.createElement('li');
// liTag1.write('Ovo je tekst li taga koji sam dodao');
// lista.appendChild(liTag1);

let liTag2 = document.createElement('li');
let textTag2 = document.createTextNode("Ovo je DRUGI liTag");
liTag2.appendChild(textTag2);
lista.appendChild(liTag2);

let liTag3 = document.createElement('li');
let textTag3 = document.createTextNode("Ovo je TRECI liTag");
liTag3.appendChild(textTag3);
lista.appendChild(liTag3);

noviDiv.appendChild(lista);

var para = document.createElement("p");
var node = document.createTextNode("Novi pasus.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

// Iz ul liste izbaciti prvu stavku.

lista.removeChild(liTag1);

// U ul listi zameniti drugu stavku liste.