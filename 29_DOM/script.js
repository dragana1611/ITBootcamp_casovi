//1. dohvatiti dugme
let btn = document.querySelector('button');

//2. dodati even listener na zeljeni element (on aktivno slusa sve sto se dogadja nad tim lelnmentonm)
//btn.addEventListener('naziv iventa', f-ja koja se realizuje() kada se aktivira
btn.addEventListener('click', ()=>{
    console.log('jednostruki klik');
});

//////////////////////
let dupliKlik = document.querySelector('#dupli_klik');
//let dupliKlik = document.getElementById('dupli_klik');
//2. dodati event listener
dupliKlik.addEventListener('dblclick',()=>{
    console.log('dvostruki klik');
});
// //dupliKlik.addEventListener('dblclick',(){
// console.log('dvostruki klik');
// });

//////////////////////////////////
//drugi nacin dodavanja event-a
function klikni(){
    console.log("kliknuto");
}

//Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
