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



