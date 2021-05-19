//16.Dat je niz stavki za kupovinu(članovi niza su stringovi).Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let a=["mleko", "sapun", "prasak", "meso"];
let uolista=`<ul>`;

function lista(niz) {
    a.forEach(elem => {
        uolista += 
        `<li>${elem}</li>
        `
    });
    uolista += `</ul>`
}
lista(uolista);
document.body.innerHTML += uolista;

//17.Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
a = ["bogdan", "luka", "vladimir", "aleksandar"];

tabela = `<table>`;

function tabelaKos(niz) {
    a.forEach(elem => {
        tabela +=
            `
            <tr>
            <td>${elem}</td>
            </tr>
        `
    });
    tabela += `</table>`
}
tabelaKos(a);
document.body.innerHTML += tabela;


//18.Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve slike u html dokumentu sa putanjama navedenim u nizu.

let slike = ['avatar_female1 - Copy.png', 'avatar_female2 - Copy.png', 'avatar_male1.png', 'avatar_male2 - Copy.png' ];

function slikeNiz(niz) {
    slike.forEach(elem=>{
        document.body.innerHTML += `<br>`;
        document.body.innerHTML += `<img src="${elem}" style="height:100px;">`;
    });
}
slikeNiz(slike);


//MAX-duzina/Min-duzina - Odrediti element u nizu stringova sa najvećom dužinom i min duzinom.

let imena = ['stefan', 'nikola', 'milijana', 'ana', 'nenad', 'vuk','vladimir'];

let maxDuzinaNiza = niz=>{
    let maxDuzina = niz[0].length;
    niz.forEach(elem=>{
        if(elem.length > maxDuzina){
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}
console.log(maxDuzinaNiza(imena));

let ispisStringMaxDuzine = niz =>{
    let md = maxDuzinaNiza(niz);
    niz.forEach(elem=>{
        if(elem.length==md){
            console.log(elem);
        }
    });
}
ispisStringMaxDuzine(imena);

let minDuzinaNiza = niz=>{
    let minDuzina = niz[0].length;
    niz.forEach(elem=>{
        if(elem.length<minDuzina){
            minDuzina=elem.length;
        }
    });
    return minDuzina;
}

let ispsisStringMinDuzina = niz=>{
    let md = minDuzinaNiza(niz);
    niz.forEach(elem=>{
        if(elem.length==md){
            console.log(elem);
        }
    });
}

let ispisStringSvojstvo = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem => {
        if (elem.length == md) {
            console.log(elem);
        }
    });
}

ispisStringSvojstvo(imena, maxDuzinaNiza);//maxDuzinaNiza je callback f-ja
ispisStringSvojstvo(imena, minDuzinaNiza);//minDuzinaNiza je callback f-ja



//zadatak 24
let zad24a=(a,b)=>{
    let n=a.length; // let n=b.length;
    let c = [];
    for(let i=0; i<n; i++){
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}

let zad24b = (a,b)=>{
    let n=a.length;
    let c=[];
    for(let i=0; i<n; i++){
        c[2*i] = a[i];
        c[2*i+1]=b[i];
    }
    return c;
}
let zad24c=(a,b)=>{
    let n=a.length;
    let c=[];
    let j =0;
    for (let i = 0; i < n; i++) {
        c[j++]=a[i];
        c[j++] = b[i];
    }
    return c;
}

a = [4,-9,4,1];
b=[8,8,1,0];
let c=zad24a(a,b);
console.log(c);

c=zad24b(a,b);
console.log(c)

c = zad24c(a, b);
console.log(c)

//zadatak 25

let zad25 = (a,b)=>{
    let n=a.length;
    let c=[];
    for (let i = 0; i < n; i++) {
    c[i]=a[i]*b[i];
    }
    return c;
}

//zadatak 26

let zad26 = a =>{
    let n= a.length; //
    let b=[];
    for (let i = 0; i < n/2; i++) {
        b[i] = (a[i] + a[n-1-i]);
    }
    return b;
}

