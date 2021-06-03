
let getTodos = (resource, callback) => {

    // kreiranje xml objekta
    let request = new XMLHttpRequest();

    //2.
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            //console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if (request.readyState === 4) {
            //console.log("ne mogu da dohvatim podatke");
            callback(undefined, "ne mogu da dohvatim podatke");
        }
    });

    // otvaraje kreiranog zahteva
    request.open('GET', resource);

    // saljemo request
    request.send();
}
//getTodos("../JSON/todos.json", ()=>{});
getTodos("../JSON/todos.json", (data, err) => {
    console.log('callback okinuta');
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
        getTodos("../JSON/fruits.json", (data, err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);

                getTodos("../JSON/vegetables.json", (data, err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(data);
                        getTodos("../JSON/cereals.json", (data, err) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(data);
                            }
                        });
                    }
                });
            }
        });
    }
});

console.log("KRAJ!!!");