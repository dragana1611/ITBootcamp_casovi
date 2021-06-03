let request = new XMLHttpRequest();

// request.addEventListener('readystatechange', ()=>{
//     //console.log(request);
//     if(request.readyState == 1) {
//         console.log("uspostavljena konekcija");
//     }
//     else if (request.readyState == 2){
//         console.log("poslat je zahtev serveru");
//     }
//     else if (request.readyState == 3){
//         console.log("odgovor je u statusu preuzimanja!");
//     }
//     else if (request.readyState == 4){
//         console.log("odgovor je preuzet sa servera u potpunosti");
//         console.log(request.responseText);
//     }
// });
//let odgovorJS; //nije preporucljivo
request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status ===200){
        let odgovor = request.responseText; // odgovor je uvek string
        let odgovorJS = JSON.parse(odgovor);
        //console.log(odgovor);
        console.log(odgovorJS);// iterira se forEach petljom
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/posts/55');
request.send();

console.log('nesto posle1');
console.log('nesto posle 2');