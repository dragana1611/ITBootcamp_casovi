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
    Temperature: [10, 15, 17, 21, 18, 13, 11],
    prosecna: function () {
        let sum = 0;
        this.Temperature.forEach(elem => {
            sum += elem;
        });
        return sum / this.Temperature.length;
    }
};

//1.metoda: prosecna T tog dana
console.log(dan.prosecna());

