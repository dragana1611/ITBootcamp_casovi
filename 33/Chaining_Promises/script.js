
let getTodos = resource => {

    // kreiranje xml objekta
    let request = new XMLHttpRequest();
    request.open('GET', resource);
    request.send();
    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                //console.log(request.responseText);
                // callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if (request.readyState === 4) {
                //console.log("ne mogu da dohvatim podatke");
                // callback(undefined, "ne mogu da dohvatim podatke");
                reject("ne mogu da dohvatim podatke");
            }
        });
    });
}

getTodos("../JSON/fruits.json").then(data => {
    console.log(' promise fruits resolved', data);
    return getTodos("../JSON/vegetables.json");
}).then(data => {
    console.log('promise vegetables resolved', data);
    return getTodos('../JSON/cereals.json');
}).then(data => {
    console.log('promise cereals resolved', data);
}).catch(err => {
    console.log('promise rejected', err);
});
console.log("KRAJ!!!");