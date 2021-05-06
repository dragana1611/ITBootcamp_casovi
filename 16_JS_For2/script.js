//13.
let n=-10;
let m=10;
let i;
let brPoz = 0;
let brNeg = 0;

for(i=n; i<=m; i++){
    if (i>0){
        brPoz++;
    }
    else if(i<0){
        brNeg++;
    }
}
console.log(`broj pozitivnih je ${brPoz}, a broj negativnih je ${brNeg}`);


/*14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.    */
n=5;
m=50;
let brDel = 0;
for(i=n; i<=m; i++){
    if ((i%3==0) || (i%5==0)){
        brDel++;
    }
}
console.log(`broj delilaca sa 3 ili 5 je ${brDel}`);

//15.Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

n=10;
m=50;
let brJ4=0;
let suma=0;

for(i = n; i <= m;  i++){   
        if(i % 10 == 4 || i%10==-4) {            
           brJ4++;
           suma+=i;  
        }
    }
    console.log(`Ima ukupno ${brJ4} brojeva kojima je poslednja cifra 4 i njihova suma je ${suma} `);

//16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n=10;
m=30;
let a=5;
let sum=0;
for(i = n; i <= m;  i++){
    if(i%a !=0){
        sum += i;
    }
}
console.log(`suma brojeva koji nisu deljivi brojem ${a} je: ${sum}`);

//17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

n=10;
m=25;
a=5;
let proizv=1;
for(i = n; i <= m;  i++){
    if(i%a ==0){
        proizv *=i;
    }
}
console.log(`proizvod brojeva koji su deljivi brojem ${a} je: ${proizv}`);

/*//18. Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
*/

//I nacin
let redovi = 6;
let tabela = `<table>`;
for(i=1; i<=redovi; i++){
    if(i%2==0){
        tabela += `<tr class="obojen"> `;
    }
    else{
        tabela += `<tr class="obojen2">`;
    }
    tabela +=
    `
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;
    
}
tabela  += `</table>`;
document.body.innerHTML += tabela;

//////////////////////////////////////


let h1 = document.getElementById("naslov");
h1.innerHTML +=/* = "*******" + element.innerHTML    - zvezdice pre teksta naslova */ "*****";

//18. II nacin
let htmlTabela = document.getElementById("mojaTabela");
for(i=1; i<=redovi; i++){
    if(i%2==0){
    htmlTabela.innerHTML += 
    `
    <tr class="obojen">
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;
    }
    else{
        htmlTabela.innerHTML += 
        `
    <tr class="obojen2">
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;
    }
}

/*19.Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.*/

let brLI=10;
let lista =`<ul>`;
for(i=1; i<=brLI; i++){
    lista +=`<li> Element ${i}`;
    if(i%3 ==2){
        i++
        lista += 
        `<ul>
        <li class="ljubicasti">Element ${i}</li>
        </ul>
        `
    }
    lista += ` </li>`;

}
lista  += `</ul>`;
document.body.innerHTML += lista;


//Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju

let brSpan=64;
for(i=1; i<=brSpan; i++){
    document.body.innerHTML += `<span class="polje"> ${i}</span>`;
    
        if(i%8==0){

        document.body.innerHTML += `<br>`;
        }
}








