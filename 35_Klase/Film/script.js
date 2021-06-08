class Film {
    constructor(na, re, giz) {
        this.naslov = na;
        this.reziser = re;
        this.godIzd = giz;
    }
    stampaj() {
        console.log(this.naslov);
    }

    set naslov(nasl) {
        this._naslov = nasl;
    }
    set reziser(rez) {
        this._reziser = rez;
    }
    set godIzd(gizd) {
        if (gizd >= 1800) {
            this._godIzd = gizd;
        } 
        else {
            //console.log('Error: Godina izdanja filma mora biti veća od 1800.');
            this._godIzd = 1800;
        }
    }
    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godIzd() {
        return this._godIzd;
    } 
}

const Kapernaum = new Film('Capernaum', 'Nadine Labaki', 2018);
console.log(Kapernaum);
Kapernaum.stampaj();

const The_Father = new Film('The Father', 'Florian Zeller', 2020);
console.log(The_Father);
The_Father.stampaj();

const Gone_with_the_Wind = new Film('Gone with the Wind', 'Victor Fleming', 1939);
console.log(Gone_with_the_Wind);
Gone_with_the_Wind.stampaj();