export class Pacijent {
    constructor(ime, vis, tez) {
        this.ime = ime;
        this.visina = vis;
        this.tezina = tez;
    }
    stampaj() {
        console.log(this.ime, this.visina, this.tezina);
    }
    Bmi() {
        return this.tezina / (this.visina ** 2);
    }
    Kritican() {
        let BMI = this.Bmi();
        if (BMI < 15 || BMI > 40) {
            return true;
        }
        else {
            return false;
        }
    }
    set ime(i) {
        this._ime = i;
    }

    set visina(v) {
        if (v > 0 && v <= 2.50) {
            this._visina = v;
        }
        else {
            //console.log('Error: Visina je van opsega');
            this._visina = 1;
        }
    }

    set tezina(t) {
        if (t > 0 && t <= 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 0;
        }
    }

    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }
}

