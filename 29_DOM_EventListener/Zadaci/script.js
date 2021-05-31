// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.getElementById('brojac');
let br=1;
btnBrojac.addEventListener('click',()=>{
    //br++; prvo uveca pa ispisuje u konzoli
    console.log(br);
    br++;
});

//2. Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let btnBrojac1 = document.getElementById('brojac1');
let pIspisBrojaca1 = document.getElementById('ispisBrojaca1');

let br1=0;
pIspisBrojaca1.innerHTML = br1;

btnBrojac1.addEventListener('click', ()=>{
    br1++;
    pIspisBrojaca1.innerHTML = `${br1} ` //moze i samo br1
});

//3.Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

let btnMinus = document.getElementById('minus');
let btnPlus = document.getElementById('plus');
let spanIspisBr = document.getElementById('res');

let res=0;
spanIspisBr.innerHTML = res;

btnPlus.addEventListener('click', ()=>{
    spanIspisBr.style.color = "black";
    res++;
    spanIspisBr.innerHTML = res;// moze i =res++ bez line 39
});
btnMinus.addEventListener('click', () => {
    spanIspisBr.style.color = "black";
    res--;
    if(res<0){
        res=0;
        spanIspisBr.style.color="blue";
    }
    spanIspisBr.innerHTML = res;
});


/* Napraviti input polje i dugme.U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
 */
let inpIme = document.getElementById('ime');
let btnspisiIme = document.getElementById('ispisiIme');
let spanIspisiIme = document.getElementById('ispisi');

btnspisiIme = addEventListener('click', ()=>{
    spanIspisiIme.innerHTML = inpIme.value;
});
btnspisiIme = addEventListener('dblclick', () => {
    alert(`Dobro dosli ${inpIme.value}`);
});


//7.zadatak

let inpKvBr = document.getElementById('kvadratBr');
let inpPolaBr = document.getElementById('polaBr');
let inpPovK = document.getElementById('povrsKrug');

let btnKvBr = document.getElementById('racKvadr');
let btnPolaBr = document.getElementById('racPolaBr');
let btnPovK = document.getElementById('racPovrsK');

let resKvBr = document.getElementById('resKvadrBr');
let resPolaBr = document.getElementById('resPolaBr');
let resPovK = document.getElementById('resPovrsK');

btnKvBr.addEventListener('click', ()=>{
    let resKv = Number(inpKvBr.value)**2;
    resKvBr.innerHTML = resKv;
});

btnPolaBr.addEventListener('click', () => {
    let resPola = Number(inpPolaBr.value)/2;
    resPolaBr.innerHTML = resPola;
});

btnPovK.addEventListener('click', () => {
    let resPovrsina = Number(inpPovK.value) ** 2 * Math.PI;
    resPovK.innerHTML = resPovrsina;
});