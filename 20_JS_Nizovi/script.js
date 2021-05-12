let voce=["jagoda", "jabuka","malina", "kupina", "ananas", "breskva"];
console.log(voce);
console.log(voce[2]);

voce[2] = 'tresnja';
console.log(voce);

// isp[is elemenata niza]
console.log(voce[0], voce[1], voce[2]);


//ispis elemenata niza koriscenjem petlje

for(let i =0; i<voce.length; i++){
    console.log(voce[i]);
}

/*voce[3] = "ananas";
console.log(voce);*/

//broj elemenata niza
console.log(voce.length);

voce = ["kajsisja", "dunja", "visnja"];
console.log(voce);

const povrce = ["tikvica", "boranija", "krompir"];
console.log(povrce);
povrce [0]="tikva";
console.log(povrce);
//povrce = ["grasak", "pasulj"];

let razno = [3, -15.5,false,"bla bla bla", ["a", "b", "c"]];
console.log(razno);

//2 zadatak - Odrediti zbir elemenata celobrojnog niza.

let brojevi = [150, 140, 360, 120, 180];
let suma=0;
for(let i =0; i<brojevi.length; i++){
    suma+=brojevi[i];
}
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.

 brojevi = [15, 14, 36, 12, 18];
let proizvod=1;
for(let i =0; i<brojevi.length; i++){
    proizvod *= brojevi[i];
}
console.log(proizvod);


//4. Odrediti srednju vrednost elemenata celobrojnog niza.
brojevi = [15, 14, 36, 12, 18];
suma=0;
for(let i =0; i<brojevi.length; i++){
    suma+=brojevi[i];
}
let srVr = suma/brojevi.length;
console.log(srVr);


let aritmeticka  = (niz) =>{
        let s=0;
        let br=0;
    for(let i =0; i < niz.length; i++){
        s += niz[i];
        br++;
    }
    return s/br;
}
console.log(aritmeticka([2,3,4,5]));
console.log(aritmeticka([-4,10,3]));



//3. preko f-je
function br (brojevi){
    suma=0;
for(let i =0; i<brojevi.length; i++){
    suma+=brojevi[i];
}
return suma;
}
br([15, 14, 36, 12, 18]);
console.log(br([15, 14, 36, 12, 18]));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
brojevi = [150, 140, 360, 120, 180];
let maxVr = brojevi[0];
for(let i=0; i<brojevi.length; i++){
    if(maxVr < brojevi[i]){
        maxVr = brojevi[i];
    }
}
console.log(maxVr);

let br1=5;
let br2=15;
let br3=7;

let max = br1;
if(max<br2){
    max=br2;
}
if(max<br3){
    max=br3;
}

//8.Odrediti indeks maksimalnog elementa celobrojnog niza.

//I nacin
brojevi = [150, 140, 360, 120, 180, 360, 140, 360];
let index = 0;
for(let i=0; i<brojevi.length; i++){
    if(maxVr == brojevi[i]){
        index = i;
        break;// sa break ispisuje prvi index max elementa, a bez break ispisuje poslednji index max elementa
    }
}
console.log(index);

//II nacin
let maksVr = brojevi[0];
let maksIndex = 0;
for(let i=0; i<brojevi.length; i++){
    if(brojevi[i] >/*=*/ maksVr){ // sa = vraca polsednju najvecu vrednost i njegov index
        maksVr=brojevi[i];
        maksIndex = i;
    }
}
console.log(maksIndex);

//6. Odrediti minimalnu vrednost u celobrojnom nizu.
brojevi = [150, -140, 360, 120, 180];
let minVr = brojevi[0];
for(let i=0; i<brojevi.length; i++){
    if(minVr > brojevi[i]){
        minVr = brojevi[i];
    }
}
console.log(minVr);

//8. Odrediti indeks minimalnog elementa celobrojnog niza.
brojevi = [150, 140, 360, 120, 180, 360, 140, 360];
minVr = brojevi[0];
let minIndex = 0;
for(let i=0; i<brojevi.length; i++){
    if(brojevi[i] < minVr){ // sa = vraca polsednju najvecu vrednost i njegov index
        minVr=brojevi[i];
        minIndex = i;
    }
}
console.log(maksIndex);
console.log(minindex);

//9.Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
brojevi = [15, 14, 36, 12, 18, 36, 14, 36];
suma=0;
let brojac=0;
for(let i =0; i<brojevi.length; i++){
    suma+=brojevi[i];
}
srVr = suma/brojevi.length;

for(let i =0; i<brojevi.length; i++){
   if (brojevi[i]>srVr){
       brojac++;
   }
}
console.log(brojac);


//10.Izračunati zbir pozitivnih elemenata celobrojnog niza.
brojevi = [15, 14, 36, -12, 18, -36, 14, 36];
suma=0;
for(let i =0; i<brojevi.length; i++){
    if(brojevi[i]>0){
        suma += brojevi[i];
    }
}
console.log(suma);

//11.  Odrediti broj parnih elemenata u celobrojnom nizu

brojevi = [155, 142, 361, -128, 184, -363, 145, 360];
suma=0;
brojac = 0;
for(let i =0; i<brojevi.length; i++){
    if(brojevi[i]%2==0){
        brojac++;
    }
}
console.log(brojac);
