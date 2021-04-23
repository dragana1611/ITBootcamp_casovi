console.log("zadaci");
let s=12;
let m=15;
let odPonoci=s*60+m;
console.log("od ponoci je proslo:"+odPonoci);
//let doPonoci=24*60-odPonoci;
//console.log("do ponoci je preostalo:"odPonoci);
//console.log("20"+"."+"04"+"."+"2021"+"."+ " "+ "2021" + "/"+"04"+"/"+"20"+"/");


let min = 63;
let sat=Math.floor(min/60);
m=min%60;
console.log("Proslo je"+" " + sat+"sati" +"i" + min+ "minuta");
//2. nacin
m=min%60;
sat=(min-m)/60;

let cena=563;
let novcanica=1000;
let kusur = novcanica-cena;
console.log(kusur);

let datum = new Date();
console.log(datum);
let danuNedelji = datum.getDay();
console.log(danuNedelji);
let danuMesecu = datum.getDate();
console.log(danuMesecu);
let trenutnoSati = datum.getHours();
let trenutnoMinuta = datum.getMinutes();
let trenutnoOdPonoci = trenutnoSati*60 + trenutnoMinuta;


//6.

let euro=118;
let dinar=1;
conv=dinar/euro;
console.log(conv);
conv2=dinar*euro;
console.log=(conv2);


let x=15;
let y=15;
if(x==y){
    console.log("Brojevi x i y su jednaki");
    console.log(`Brojevi x = ${x} i y = ${y} su jednaki`);
}

let x1 = "15";
if (x==x1){
    console.log(`Brojevi x i x1 imaju istu vrednost`);
}

if(x===x1){
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost`);
}   

