//ispis brojeva od 1-5

let i=1;
while(i<=5){
    console.log(i);
    i++;
}
console.log(`vrednost promenljive i nakon while petlje je ${i}`);


//1
let br1=1;
let res="";
while(br1<=20){
   res=res+br1 + " ";//res += (res+br1)
   br1++;
}
console.log(res);

//2.
let br2=20;
while(br2>=1){
    console.log(br2);
    br2--;
}

//3.
let br3=1;
while(br3<=20){
    if(br3 % 2 == 0){
    console.log(br3);
    }
    
    br3++;
}

//Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let n=1;

while (n<=12){
   if(n%2==1 && n%3==1){
        document.body.innerHTML += `<p style="color:red">VEZBA</p>`;
    
   }
    
    if (n%2==0 && n%3==2){
        document.body.innerHTML += `<p style="color:blue">VEZBA</p>`;
     
    }
    if (n%3==0 && n%2==1){
        document.body.innerHTML += `<p style="color:green">VEZBA</p>`;
     
    }
     n++;   
       
}

//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

n=1;
let slika_m="Slike/avatar_male1.png";
let slika_z="Slike/avatar_female1.png";

while (n<=6){
    if(n%2==1){
        document.body.innerHTML += `<img  src="${slika_m}" style="border: 5px dashed black; height:100px"><br>`; 
    }
    if(n%2==0){
        document.body.innerHTML += `<img  src="${slika_z}" style="border: 7px double darkblue; height:100px"><br>`;
    }
    n++;
}



i=1;
n=6;
slika_m="Slike/avatar_male1.png";


while (i<=n){
    if(i%2==1){
        document.body.innerHTML += `<img  src="${slika_m}" class="okvir1"><br>`; 
    }
    if(i%2==0){
        document.body.innerHTML += `<img  src="${slika_m}" class="okvir2"><br>`;
    }
    i++;
}


/*CIKLICNO PRIKAZIVANJE SLIKA

vise razlicitih slika MORAJU DA IMAJU ISTU EXTENZIJU
1.jpg  2.jpg 0.jpg ili ost + 1
i=1;
n=7;
while (i<=n){
    let ost=i%3;
    if(i%2==0){
    document.body.innerHTML += `<img src="slike/${ost}.jpg"> class="okvir1"`;
    }
    else {
        document.body.innerHTML += `<img src="slike/${ost}.jpg"> class="okvir2"`;
    }
    i++;
}
*/

//6. Odrediti sumu brojeva od 1 do 100
 i=1;
let s=0;
while(i<=100){
    s=s+i;
    i++;
    
}
console.log(`suma svih brojeva do 100 je:${s}`);

//4.

document.body.innerHTML += `<h1>While petlja</h1>`;
i=1;
n = 5;
while(i <= n){
    if(i%3==1){
        document.body.innerHTML += `<p style="color:red">Ovo je ${i}. paragraf</p>`;
    }
    else if (i%3==2){
        document.body.innerHTML += `<p style="color:green">Ovo je ${i}. paragraf</p>`;
    }  
    else {
        document.body.innerHTML += `<p style="color:blue">Ovo je ${i}. paragraf</p>`;
    }
    i++;
}

//5.
//Odrediti sumu brojeva od 1-5
i=1;
suma = 0;
n=5
while (i<= n){
    suma +=i;
    i++;
}
console.log(suma);



// 1,2,3,4,5   5*(5+1)/2 GAUSOVA formula - radi ISKLJUCIVO OD 1 do n (ako je od 550 ne radi)
let suma1= (n*(n+1))/2
console.log(suma1);

// odrediti proizvod brojeva od 1-5

let proizvod = 1;
i=1;
n=5;
while(i<=n){
    proizvod *= i;
    i++;
}
console.log(proizvod);

//12
i=1;
let k=100;  // 1,2,5,10
let brDeljivih = 0;

while (i<=k){
    if (k%i==0){
        brDeljivih++;
}
    i++;
}
console.log(brDeljivih);
if(brDeljivih==2){
    console.log(`Broj je prost`);
}
else{
    console.log(`Broj nije prost`);
}
//11
k=10; // 1,2,5,10
i=1;
let brDeljivih1 = 0;
while (i<=k){
    if (k%i==0){
        brDeljivih1++;
        
    }
    i++;
}
console.log(brDeljivih1);
//10
i=1;
n=5;
let sumKv=0;
let sumKub = 0;
while(i<=n){
    if(i%2==0){
        sumKv += i**2;
             
    }
    else {
        sumKub += i**3;
            
    }
    i++;
}
console.log(sumKv);
console.log(sumKub);


//9.
n=5;
let m=20;
let proizvod1 = 1;
while(n<=m){
    proizvod1 *= n;
    n++;
}
console.log(proizvod1);

//8.
n=5;
m=20;
let suma3 = 0;
while(n<=m){
    suma3 += n;
    n++;
}
console.log(`Suma je ${suma3}`);

//7.
i=1;
n=20;
let suma2 = 0;

while (i<= n){
    suma2 +=i;
    i++;
}
console.log(`Suma je ${suma2}`);

//6.

i=1;
n=100;
let suma4 = 0;

while (i<= n){
    suma4 += i;
    i++;
}
console.log(`Suma je ${suma4}`);
