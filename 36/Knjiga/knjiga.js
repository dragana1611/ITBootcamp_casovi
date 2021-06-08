export class Knjiga {
    constructor (naslov, autor, godIzdanja, brojStrana, cena){
        this.naslov = naslov;
        this.autor = autor;
        this.godIzdanja = godIzdanja;
        this.brojStrana = brojStrana;
        this.cena = cena;
    }

    //Seteri
    set naslov(naslov){
        this._naslov = naslov;
    }
    set autor(autor){
        this._autor = autor;
    }
    set godIzdanja(godIzdanja) {
        this._godIzdanja = godIzdanja;
    }
    set brojStrana(brojStrana) {
        this._brojStrana = brojStrana;
    }
    set cena(cena) {
        this._cena = cena;
    }

    get naslov() { return this._naslov;}
    get autor() { return this._autor;}
    get godIzdanja() { return this._godIzdanja;}
    get brojStrana() { return this._brojStrana;}
    get cena() { return this._cena;}
 
    
    //metode
    stampaj(){
        console.log(this.naslov, this.autor, this.godIzdanja, this.brojStrana, this.cena);
    }

    obimna() {
        if(this.brojStrana >600){   // return this.brojStrana>600;
            return true;
        }
        else{
            return false;
        }
    }

    skupa() {
        return this.cena > 8000;
    }

    dugackoIme(){
        let brKarakteraImena = this.autor.length;
        return brKarakteraImena > 18;
    }
    
}

