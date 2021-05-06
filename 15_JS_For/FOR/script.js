let i;
for (i=1; i<=5;i++){
console.log(i);
}

//ispisati parne brojeve 1-20

//prvi nacin

for(i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

//drugi nacin

for(i=2; i<=20; i +=2){
    console.log(i);
}

//ispisati neparne brojeve 1-20
for(i=1; i<=20; i +=2){
    console.log(i);
}

//1 Ispisati brojeve od 1 do 20 

i=1;
for(i=1; i<=20; i++){
    console.log(i);
}
//2 Ispisati brojeve od 20 do 1 

i=20;
for(i=20; i>=1; i--){
    console.log(i);
}
//4   Ispisati dvostruku vrednost brojeva od 5 do 15

i=5;

for(i=5; i<=15; i++){
    
    console.log(i*2);
}

//5 Odrediti sumu brojeva od 1 do n

i=1;
let n=10;
let suma=0;
for(i=1; i<=n; i++){
    suma=suma+i;
   
}
console.log(suma);
//6 Odrediti sumu brojeva od n do m 

n=10; // i=n 
let m=20;
let suma1=0;
for(n=10; n<=m; n++){
    suma1=suma1+n;
   
}
console.log(suma1);
//7 Odrediti proizvod brojeva od n do m

n=10;
m=20;
let proizvod=1;
for(n=10; n<=m; n++){
    proizvod *= n;
}
console.log(proizvod);

//8 Odrediti sumu kvadrata brojeva od n do m *

n=2;
m=6;
i=n;
let suma3=0;
for(i=2; i<=m; i++){
    suma3 = suma3 + i*i;
}
console.log(suma3);

//for(n=2, m=8, suma=0, i=n; i<m; i++)

/*//9 Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).


i=1;

for(i=1; i<=n; i++){
    document.body.innerHTML += `<img src="${i}.jpg">`;
}
*/
//11 Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

n=5;
m=150;
let brDel = 0;
for(i=n; i<=m; i++){
    if (i%13==0){
        brDel++;
    }
}
    console.log(`Broj delilaca intervala n-m sa 13 je ${brDel}`);

//12 Ispisati aritmetičku sredinu brojeva od n do m.

n=5;
m=25;
let suma5 = 0;
let br = 0
let arSr ;
for(i=n; i<=m; i++){
    br++;
    suma5 += i;
    arSr=suma5/br;
}
    console.log(`Aritmeticka sredina je ${arSr}`);


/*//9
n=8;
for(i=1; i<=n; i++){
    if(i%3==1){
        document.body.innerHTML += `<img src = "1.jpg">`;
    }
    else if (i%3==2){
        document.body.innerHTML += `<img src = "2.jpg">`;
    }
    else {
        document.body.innerHTML += `<img src = "3.jpg">`;
    }
}*/

for (i=0; i<n; i++){
    let k=i%3;
    document.body.innerHTML += `<img src="${k+1}.jpg">`;
}

//10 Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *


//Prvi nacin
let proizvod11 =1;
for(i=20; i<=100; i++){
    if(i%11==0){
        proizvod11 *=i;
    }
}
console.log(`proizvod je ${proizvod11}`);

proizvod11=1;
for(i=22; i<=100; i+=11){
    proizvod11 *=i;
}
console.log(`proizvod je ${proizvod11}`);

//12 Ispisati aritmetičku sredinu brojeva od n do m.

//prvi nacin
n=2;
m=8;
let suma6=0;
let broj=0;
for(i=n; i<=m; i++){
    suma6 +=i;
    broj++;
}
let arsr = suma6/broj;
console.log(arsr);

//drugi nacin
n=2;
m=5;
arsr = 0;
for(i=n; i<=m; i++){
    arsr +=i;
}
arsr /= (m-n+1);
console.log(arsr);
