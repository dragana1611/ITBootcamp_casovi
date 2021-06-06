//fetch vraca Promise - then i catch
//fetch upada u catch granu samo ako je doslo do network error-a
//1. fetch - json fajla
//2. return response.json() koji je Promise
//3.uzeti podatke iz response.json
//4. catch error

fetch("../JSON/todos.json").then(response =>{
    console.log("resolved", response);//response.json je takodje Promise
    return response.json();
}).then(data =>{
    console.log(data);
}).catch(err=>{
    console.log("rejected", err);
});

// ASYNC & AWAIT
// asinhrona f-ja se prosledjuje kao parametar i ima zagrade ()
//asinhrona f-ja ispred zagrada mora da ima async
// kao rezultat vraca Promise
let getTodos = async()=>{
    let response = await fetch("../JSON/todos.json");// fetch vraca response zbog cega smo kasnije koristili then i catch
    //await - (cekaj) zaustavi izvrsavanje u ovoj niti dokle god se ne izvrsi komanda koja je iza await
    // await - iskljucivo u asinhronoj f-ji
    //console.log(response);
    // ispitivanje statusa
    if(response.status !=200){
        throw new Error("ne mogu da dohvatim podatke");
    }
    else{
        let data = await response.json();
    }
     // response.json() vraca promise
    //console.log(data);
    // primer data.then().catch()
    response = await fetch("../JSON/fruits.json");
    data = await response.json();
    return data;// vraca promise, mora da se radi then i catch i vraca poslednji data ako ima vise data


}
console.log(1);
console.log(2);
getTodos().then(data =>{
    console.log('resolved', data);
}).catch(err => {
    console.log('rejected', err);
});

// .then(data => console.log('resolved', data))
// .catch(err => console.log('rejected', err));
console.log(3);
console.log(4);