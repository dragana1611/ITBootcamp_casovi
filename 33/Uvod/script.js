// kreiranje xml objekta
let request = new XMLHttpRequest();

//2.
request.addEventListener('readystatechange', ()=>{
    if(request.readyState===4 && request.status===200){
        console.log(request.responseText);
    }
    else if(request.readyState === 4)   {
        console.log("ne mogu da dohvatim podatke");
    }
});

// otvaraje kreiranog zahteva
request.open('GET', './JSON/todos.json');

// saljemo request
request.send();

//PRIMER CALLBACK F-ja
let myFunc = callbackFunction =>{
    let value1 =5;
    let value2 = 6;
    callbackFunction(value1, value2);
}
myFunc((val1,val2) =>{ // nije isti value kao u line 22
    console.log(val1+val2);
});

