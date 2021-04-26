let a=5;

if(a>0 && a<10){
    console.log("oba logicka uslova su zadovoljena");
}
else{
    console.log("barem jedan uslov nije zadovoljen");
}

let b=-5;
if ((b<0) || (b>15)){
    console.log("barem jedan logicki uslov je zadovoljen");
}
else{
    console.log("nijedan uslov nije zadovoljen");
}

let c=3;
if(!(c<0) ){
    console.log(`broj ${c} je nenegativan`);
}
else{
    console.log(`broj ${c} je negativan`);
}

let pol="m";
let godine=25;
if ((pol=="m") && (godine>=18)){
    console.log(`osoba je muskog pola i punoletna je`);
}
else if((pol=="m") && (godine<18)) {
    console.log("osoba je muskog pola i maloletna je");
}
else if((pol=="z") && (godine>=18)){
    console.log(`osoba je zenskog pola i punoletna je`);
}
else {
    console.log(`osoba je zenskog pola i maloletna je`);
}



let dat = new Date();
let god =dat.getFullYear();
console.log(god);

if((god%400==0) || (god%4==0 && god%100!=0)){
    console.log(`Godina ${god} je prestupna`);
}
else {
    console.log(`Godina ${god} nije prestupna`);
}



let o=23;
let p=12;
let q=-3;


if(o >= p && o >= q){
        max = o;
}
else if(p >= o && p >= q){
        max = p;
}
else{
        max = q;
}
    console.log(`najveci broj je ${max}`);



let T=40;

if((T<(-15)) || (T>40)){
    console.log(`extremna temepratura!!!!`);
}
else{
    console.log("normalna temperatura");
}



let p1=11;
let k1=16;
let p2=17;
let k2=21;
if(k1>p2 && k2>p1){
    console.log("smene lekara se preklapaju");
}
else {
    console.log("smene lekara se ne preklapaju");
}


let h = dat.getHours();
let dan = dat.getDay();
console.log(h);
console.log(dan);
let rdanP = 9;
let rdanK = 20;
let vikP = 10;
let vikK = 18;

if(dan != 6 && dan !=0){
    console.log("radni je dan");
    if(h<9 || h>20){
        console.log("Butik je zatvoren");
    }
    else{
        console.log("Butik je otvoren");
    }
}
else{
    console.log("vikend je");
    if(h<10 || h>18){
        console.log("Butik je zatvoren");
    }
    else{
        console.log("Butik je otvoren");
    }
}

