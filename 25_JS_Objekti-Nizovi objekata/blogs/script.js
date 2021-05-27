let blog={
    title:"Funkcije",
    likes: 21,
    dislikes:1,
};
let blogs = [
    {title:"Nizovi", likes:16, dislikes:5},
    { title: "Grananje", likes: 14, dislikes: 0}
];

console.log(blogs);

////////////////////////////////////

let blog1 = {
    title: "musaka od tikvica",
    like:105,
    dislikes:31
};

let blog2 = {
    title: "lazanja!",
    like: 236,
    dislikes: 13
};

let blog3 = {
    title: "zapecena boranija!",
    like: 60,
    dislikes: 32
};

let blogsArr = [blog1, blog2, blog3];
// ispis objekata iz niza objekata
blogsArr.forEach(elem=>{
    console.log(elem);
});

//ispis naslova iz niza blogova forEach petljom
console.log(blog1.title);
blogsArr.forEach(elem=>{
    console.log(elem.title);
});

//ispis naslova iz niza blogova for petljom

console.log(blogsArr[0]);// vraca objekat na 0 poziziciji u nizu
console.log(blogsArr[0].title); // vraca naslov objekta na 0 poziciji
for(let i=0; i<blogsArr.length; i++){
    console.log(blogsArr[i]);
    //console.log(blogsArr[i].title);
}

/**Napisati foreach petlju koja ispisuje sve naslove iz niza objekata

arrBlogs.forEach( blog=>{
    console.log(blog.title);
});

Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
 */

let sumaLajkova = nizObj => {
    let ukupnoLajkova=0;
nizObj.forEach(elem =>{
    ukupnoLajkova += elem.like;
});
    return ukupnoLajkova;
}
console.log(sumaLajkova(blogsArr));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosekLajkova = nizObj=> {
    let sum = sumaLajkova(nizObj);
    let brojac=nizObj.length;
    return sum/brojac;
}
console.log(prosekLajkova(blogsArr));

/**Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
  

Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
 */


let viseLikes = nizObj =>{
    let lista = "<ul>";
    nizObj.forEach(elem=>{
        if(elem.like>elem.dislikes){
            lista += `<li>${elem.title}</li>`
            console.log(elem.title);
        }
    });
    lista += "</ul>";
    document.body.innerHTML += lista;
}
viseLikes(blogsArr);

let viseLikes2 = nizObj => {

    nizObj.forEach(elem => {
        if (elem.like >=2* elem.dislikes) {
            console.log(elem.title);
        }
    });
}
viseLikes2(blogsArr);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let rec = "Hello!";
let poslednjiKarakter = rec[rec.length-1];
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); //odseca deo stringa
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length-1); // vraca karakter na odredjenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith('!');
console.log(poslednjiKarakter3);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnik = nizObj => {
    nizObj.forEach(elem => {
        let naslov = elem.title;
        //I nacin

        //if(naslov[naslov.length-1] == "!"){
        //    console.log(naslov);
        //}

        // II nacin
        if(naslov.endsWith("!")){
            console.log(naslov);
        }
    });
}
uzvicnik(blogsArr);
console.log("Hello\tworld");
console.log("Hello\nworld");

