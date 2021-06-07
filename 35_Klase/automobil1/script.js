class Auto {
    constructor (b, m, k){
        //ovde pozivamo setere
        this.boja /*_boja*/ = b; // this.boja je seter, seter pozivamo kao promenljivu, bez navodjenja zagrada iako je metod
        this.marka /*_marka*/ = m;
        this.krov /*_krov*/ = k;
    }
    //seteri - postavljaju vrednost poljima
    //pravimo metod seter za svako polje
    set boja (x){
        this._boja = x;
    }
    set marka (x) {
        this._marka = x;
    }
    set krov(x) {
        if(x === true || x === false){  // zastita
            this._krov = x;
        }
        else{
            this._krov = true;
        }
    }
    // geteri - citaju vrednost iz polja, vracaju vrednosti
    get boja() {
        return this._boja;
    }
    get marka() {
        return this._marka;
    }
    get krov() {
        return this._krov;
    }
}
 
let auto1 = new Auto ("red", "Fiat", true);
//OVAKO NE RADITI!!!!!!!!
// console.log(auto1._boja);
// auto1._boja = "white";
// console.log(auto1._boja);

//OVAKO DA!!!!!!!
//Pristup poljima iskljucivo preko getera i setera
console.log(auto1.boja);// geteru pristupamo bez zagrada!!!!
auto1.boja = "white"; // pristupam seteru za boju
console.log(auto1.boja);