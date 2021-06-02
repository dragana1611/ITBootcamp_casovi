// function test(){
//     console.log('pozvana je f-ja test');
//     //fjaSaParametrom(2,4);
// }

// // function fjaSaParametrom(param1,param2){
// //     console.log('nesto se radi sa parametrima')
// // }

// console.log("prva linija koda");
// console.log("druga linija koda");
// /*window.*/setTimeout(/*prosledjujemo neke parametre*/ test, 3000); // test je callback f-ja
// //test(); // poziva test f-je
// console.log("cetvrta linija koda");
// console.log("peta linija koda");
// let datum = {
//     kisa: false,
//     sunce: true,
//     datum: '2021/05/31',
//     neobicanDan: function(){
//         this.sunce
//     },
// neobicanDan: ()=>{
// this.sunce (window.sunce) // this je u arrow
// }
// // }

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
//btn1.addEventListener('click', test); // test callBack f-ja

btn1.addEventListener('click', function(){
    console.log(this); //btn1
});


btn2.addEventListener('click', ()=>{
    console.log(this); //window
});

btn3.addEventListener('click', klik);
function klik() {
    console.log(this);
}


let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let divIspis = document.getElementById("ispis");
let clock = null;
/**
 * 0   0.2    0.4    0.6    0.8    1    1.2    1.4    1.6   1.8   2     2.2    2.4    sec
 * clock1     clock2           clock1 isteklo  clock2isteklo
 */
b1.addEventListener('click', ()=>{
    if(clock === null){  //=== bas hocemo nijednu vrednost
        clock = setTimeout(function(){
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekundi = datum.getSeconds();
            //divIspis.innerHTML = " dodat tekst iz JS!!!";
            divIspis.innerHTML += `${sati}:${minuti}:${sekundi}`;
            clock = null;
        }, 2000);   
    }
});

b2.addEventListener('click', ()=>{
    clearTimeout(clock);
    clock = null;
});


//console.log(window);

let clockInterval = null;


// console.log("prva linija koda");
// console.log("druga linija koda");
// clockInterval = setInterval(() =>{
//     console.log("poziv callback f-je")
// }, 1000);
// console.log("cetvrta linija koda");
// console.log("peta linija koda");

// setTimeout(() =>{
//     clearInterval(clockInterval);
// },5000);
// console.log("sedma linija koda");
// console.log("osma linija koda");

let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let divIspis2 = document.getElementById('ispis2');
let clockPeriod = null;

b3.addEventListener('click', () =>{
    if(clockPeriod === null){
        clockPeriod = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            divIspis2.innerHTML = `${sati} : ${minuti}: ${sekunde}`;
        }, 1000/5);
    }
});

b4.addEventListener('click', () =>{
    clearInterval(clockPeriod);
    clockPeriod = null;
});
