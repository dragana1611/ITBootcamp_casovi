class Pacijent {
    constructor (ime, vis, tez){
        this.ime = ime;
        this.visina = vis;
        this.tezina = tez;
    }
    stampaj(){
        console.log(this.ime, this.visina, this.tezina);
    }
    Bmi(){
       return this.tezina / (this.visina ** 2);
    }
    Kritican(){
        let BMI = this.Bmi();
        if(BMI<15 || BMI>40){
            return true;
        }
        else{
            return false;
        }
    }
    set ime(i){
        this._ime = i;
    }

    set visina (v){
        this._visina = v;
    }

    set tezina (t){
        this._tezina = t;
    }

    get ime(){
        return this._ime;
    }

    get visina(){
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }   
}

const pacijent1 = new Pacijent ('Pera Peric', 1.85, 80);
pacijent1.stampaj();
console.log(pacijent1.Bmi());
console.log (pacijent1.Kritican());

const pacijent2 = new Pacijent('Mika Mikic', 2.05, 170);
pacijent2.stampaj();
console.log(pacijent2.Bmi());
console.log(pacijent2.Kritican());

const pacijent3 = new Pacijent('Ana Anic', 1.65, 65);
pacijent3.stampaj();
console.log(pacijent3.Bmi());
console.log(pacijent3.Kritican());