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
// let spanIspisBr = document.getElementById('res');
// let brojac = 0;
// spanIspisBr.innerHTML = brojac;
// function plus(){
    
// }
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

let izracunaj = (a,b)=>{
    while(a>0){
        a=a-b;
        b=b+15;
    }
    return a+b;
}
console.log(izracunaj(35,5));

