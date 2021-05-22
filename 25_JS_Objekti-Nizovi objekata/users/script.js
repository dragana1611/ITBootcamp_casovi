let blog1 = {
    title:'HTML',
    like:50,
    dislikes:3
};

let blog2 = {
    title: 'CSS',
    like: 170,
    dislikes: 105
};

let blog3 = {
    title: 'JS',
    like: 205,
    dislikes: 110
};

let user1 = {
    username: 'Stefan',
    age: 31,
    blogs:[blog1, blog2, blog3],
    logBlogs: function (){
        this.blogs.forEach(elem =>{
            console.log(elem.title);
        });
    },
    sumLikes: function(){
        let sum = 0;
        this.blogs.forEach(blog=>{
            sum += blog.like;
        });
        return sum;
    }
};


//U objektu user, napraviti metod koji ispisuje sve blogove korisnika 
user1.logBlogs();


//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova.Svaki blog u ovom nizu je objekat.

let user2 = {
    username: 'Jelena',
    age: 26,
    blogs: [blog2, blog3],
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.like;
        });
        return sum;
    }
};

let user3 = {
    username: 'Milena',
    age: 14,
    blogs: [blog1],
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.like;
        });
        return sum;
    }
};

let users = [user1, user2, user3];

//Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(elem/**user*/=>{
    let godine = elem.age;
    if(godine<18){
        console.log(elem.username);
    }
});

//Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach(elem =>{
    let userBlogs = elem.blogs; //niz blogova tekuceg korisnika
        userBlogs.forEach(blog=>{
            if(blog.like > 50){
            console.log(blog.title);
            }
            //console.log(blog.title, elem.username);
        });
});

//3.Ispisati sve blogove autora čiji je username ’Stefan’

users.forEach(elem =>{
    let ime = elem.username;
    if (ime == 'Stefan'){
        elem.blogs.forEach(blog =>{
            console.log(blog.title, elem.username);
        });      
    }
});


/**4.Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali



6.Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
 */

//4 I nacin

users.forEach(elem =>{
    let userBlogs = elem.blogs;
    let sumLikes = 0;
    userBlogs.forEach(blog =>{
        sumLikes += blog.like;
    });
    if(sumLikes >100){
        console.log(elem.username);
    }
});


//4 II nacin

users.forEach(user=>{
    if(user.sumLikes()>100){
        console.log(user.username);
    }
})

//4. III nacin

let sum = blogs => {
    let s=0;
    blogs.forEach(blog=>{
        s+=blog.like;
    });
    return s;
}
users.forEach(user=>{
    let userBlogs = user.blogs;
    let likes = sum(userBlogs);
    if(likes>100){
        console.log(user.username);
    }
});


//5. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

//I nacin

let avgGeneral; // prosecna ocena u odnosu na sve blogove svih korisnika
let sumGeneral=0;
let countGeneral=0;
users.forEach(user=>{
    user.blogs.forEach(blog =>{
        sumGeneral += blog.like;
        countGeneral++;
    });
});
avgGeneral = sumGeneral/countGeneral;
console.log(avgGeneral);

users.forEach(user =>{
    user.blogs.forEach(blog =>{
        if(blog.like>avgGeneral){
            console.log(blog.title);
        }
    });
});

//II nacin

users.forEach(user =>{
    sumGeneral += user.sumLikes();
    countGeneral += user.blogs.length;
});
avgGeneral = sumGeneral / countGeneral;
console.log(avgGeneral);



////////////////////////////
//DOM

//U DOM-u svaki HTML element je jedan JS objekat

console.log(document);
console.log(typeof document);

console.log(document.URL); // ispisuje STRING
console.log(document.body); // OBJEKAT iz DOM stabla
console.log(document.documentElement); // OBJEKAT iz DOM stabla

console.log(document.anchors); // HTMLCollection
console.log(document.links);// HTMLCollection

let r1=document.getElementById('div1');
console.log(r1); //objekat koji ima navedeni ID

let r2=document.getElementsByClassName("container");
console.log(r2);

let r3=document.getElementsByTagName("div");
console.log(r3);

let r4=document.getElementsByName("link");
console.log(r4);

//prolazak kroz elemente HTMLCollection FOR petljom

for(let i=0; i< r2.length; i++){
    console.log(r2[i]);
}

//moze se GTMLCollection konvertovati u Array, pa onda za Array koristiiti forEach petlja
let r2array = Array.from(r2);
r2array.forEach(obj=>{
    console.log(obj);
});

//elementima nod liste moze se pristupiti i preko FOR i preko FOREACH petlje
r4.forEach(obj =>{
    console.log(obj);
});

for(let i = 0; i < r4.length; i++) {
    console.log(r4[i]);
}

let r5 = document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem=>{
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7);


//document.getElementsByName("link")
let r8 = document.querySelectorAll("[name='link']");
console.log(r8);

//document.getElementById("div1")
let r9 = document.querySelector("#div1");//uvek vraca objekat
console.log(r9);

//let r10 = document.querySelectorAll("#div1");//uvek vraca nodelist
//console.log(r10);

let prvip=document.querySelector('p');
console.log(prvip);

//Dohvatiti prvi div tag sa klasom „error“.
let prvidiv=document.querySelector("div.error");
console.log(prvidiv);

//Dohvatiti poslednji red u tabeli.
let poslRedTab=document.querySelector("tr:last-child");
console.log(poslRedTab);

//Dohvatiti sve linkove na stranici.
let sviLink=document.querySelectorAll("a");
console.log(sviLink);

