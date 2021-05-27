////////////////////////////////////

//OBJEKTI


let blog = {
    title: 'objekti',
    content: 'ovo su objekti...',
    autor: 'jelena'
};
console.log(blog);
console.log(typeof blog);
//let x=5;
//console.log(typeof x);
//
//pristup osobini (propertiju) u objektu
console.log(blog.title, blog.autor);
console.log(blog['content']);

// izmena jedne osobine u objektu
blog.content = 'objekti su slozeni tipovi podataka';
console.log(blog.content);

blog['autor'] = 'jelena matejic';
console.log(blog['autor']);

///////////////////////////////////
let user = {
    username: 'John Doe',
    age: 32,
    blogs: ['minimum', 'maksimum', 'average'],
    login: function () {
        console.log('ulogovani ste');
    }
};
console.log(user);
user.login();


user = {
    username: 'John Doe',
    age: 32,
    blogs: ['minimum', 'maksimum', 'average'],
    login: () => {
        console.log('ulogovani ste');
    },
    logBlogs: function () {
        //console.log(this.blogs);
        this.blogs.forEach(elem/*blog */ => {
            console.log(elem);
        });
    },
    test: function () {
        console.log(this);
    },
    racunaj: function (x, y) {
        console.log(x + y);
    }
};
user.login();
user.logBlogs();
user.racunaj(3, 5);
user.test(); // 
console.log(this);


//////////////////////////////////
/*Formirati objekat dan koji sadrži:
Datum(string u formatu YYYY / MM / DD),
    Kiša(true / false),
    Sunce(true / false),
    Oblačno(true / false),
    Vrednosti temperature(Niz temperatura tog dana).
Napisati metode koje:
Određuje prosečnu temperaturu izmerenu tog dana.
Prebrojava koliko merenja je bilo sa natprosečnom temperaturom.
Prebrojava koliko merenja je bilo sa maksimalnom temperaturom.*/

let dan = {
    Datum: '2021/05/17',
    Kisa: true,
    Sunce: true,
    Oblacno: true,
    Temperature: [10, -15, 17, 21, 18, -21, 13, 9],
    //1.metoda: prosecna T tog dana
    prosecna: function () {
        let sum = 0;
        this.Temperature.forEach(elem => {
            sum += elem;
        });
        return sum / this.Temperature.length;
    },
    // 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecna: function(){
        let avg = this.prosecna();
        let br = 0;
        this.Temperature.forEach(element =>{
            if(element>avg){
                br++;
            }
        });
        return br;
    },
    //3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxTemp: function(){
        let max=this.Temperature[0]
        this.Temperature.forEach(elem=>{
            if(elem>max){
                max=elem;
            }
        });
        return max;
    },
         /**
        maksimalna: function(){
            let maks=this.Temperature[0];
            for(let i=0; i<this.Temperature.length;i++){
                if(max<this.Temperature[i]){
                    maks=this.Temperature[i];
                }
            }
            return maks;
        }
         
    },*/
   /*brojMax:function(){
        let maks=this.maxTemp();
        let brMax=0;
        this.Temperature.forEach(elem=>{
            if(elem==max){
                brMax++;
            }
        });
        return brMaks;
    //},*/
    
    
    /*//4.Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).*/
    
        intervalMerenja:function(temp1,temp2){ 
        //ukoliko je temp1>temp2
        if(temp1>temp2){
            let tmp=temp1;
                temp1=temp2;
                temp2=tmp;
        } 
            let br=0;
        this.Temperature.forEach(elem=>{
            if(elem>temp1 && elem<temp2){
                br++;
            }
        });
        return br;
    },
    //5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    vecinomNatprosecna:function(){
        
        let iznad = this.natprosecna();
        let ispod = this.Temperature.length - iznad;
              
        return iznad > ispod;//if(iznad>ispod){return true}else{return false}
        //moze i if(iznad>this.Temperature.length/2)
    },
    //Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.Temperature: [-10, -15, -17, -21, -18, -21, -13, 11],
    //I nacin
    ledenDan:function(){
        let leden=true;//flag - kada imamo flag trazimo samo kontradikciju
        this.Temperature.forEach(elem=>{
            if(elem>=0){
                leden=false;
            }
        });
        return leden;
            //2.nacin
        //for(let i=0; i<this.Temperature.length; i++){
        //    if(this.Temperature[i]>0){
        //        return false;
        //    }
        //}
       // return true;

       //3.nacin
      /* let leden = true;
        for (let i = 0; i < this.Temperature.length; i++) {
            if(this.Temperature[i]>=0){
                leden=false;
                break;
            }
            return leden;
        });*/
    },
//7.Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
tropskiDan:function(){
    let tropski=true;
    for (let i = 0; i < this.Temperature.length; i++) {
        if (this.Temperature[i] < 24) {
                tropski = false;
            break;
                
        }
    }
    return tropski;
},
//8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
nepovoljan:function(){
    let nepovoljan = true;
    for (let i = 0; i < this.Temperature.length-1; i++) {
        if (Math.abs(this.Temperature[i+1] - this.Temperature[i]) < 8) {
            nepovoljan = false;
            
        }
    }
    return nepovoljan;
},
};


console.log(dan.prosecna());
console.log(dan.natprosecna());
//console.log(dan.brojMax());
console.log(dan.intervalMerenja(16,20));
console.log(dan.vecinomNatprosecna());
console.log(dan.ledenDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljan());


