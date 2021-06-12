import {Pacijent} from "./pacijent.js";

const pacijent1 = new Pacijent('Pera Peric', 1.85, 80);
pacijent1.stampaj();
console.log(pacijent1.Bmi());
console.log(pacijent1.Kritican());

const pacijent2 = new Pacijent('Mika Mikic', 2.05, 170);
pacijent2.stampaj();
console.log(pacijent2.Bmi());
console.log(pacijent2.Kritican());

const pacijent3 = new Pacijent('Ana Anic', 1.65, 65);
pacijent3.stampaj();
console.log(pacijent3.Bmi());
console.log(pacijent3.Kritican());

// Kreirati niz od barem tri pacijenta.
let pacijenti = [pacijent1, pacijent2, pacijent3];

//Ispisati podatke o pacijentu sa najmanjom težinom.
let minTez = pacijenti[0].tezina;
for (let i=0; i<pacijenti.length; i++){
    if(pacijenti[i].tezina< minTez){
        minTez = pacijenti[i].tezina;
    }
}
console.log(`Najmanja tezina pacijenta je: ${minTez}`);

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću

let maxBMI = pacijenti[0].Bmi();
for (let i = 0; i < pacijenti.length; i++){
    if(pacijenti[i].Bmi() > maxBMI){
        maxBMI = pacijenti[i].Bmi();
    }
}
console.log(`Najveci BMI pacijenta je: ${maxBMI}`);

