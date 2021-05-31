/*// let lista = document.querySelector('ul');
// let listaElem = document.querySelectorAll('li');
// let inpObaveza = document.getElementById('obaveza');
// let btnDodaj = document.getElementById('dodaj');
// let radioDodaj = document.querySelectorAll("input[name = 'radioDodaj']");


// btnDodaj.addEventListener('click', () =>{
    
//     if (!inpObaveza.value){
//     alert("Morate upisati obavezu u odgovarajuce polje");
//     }
//     else {
//         let liObaveza = document.createElement('li');
//         lista.appendChild(liObaveza);
//         liObaveza.innerHTML = inpObaveza.value;  
    
//         inpObaveza.value = '';
        
//         liObaveza.addEventListener('click', () => {
//             lista.removeChild(liObaveza); //BRISE li KOJI SU DODATI IZ JS-a!!!!!
//         });
//     }
// });

// listaElem = document.querySelectorAll('li');
// listaElem.forEach(li=>{
//     li.addEventListener('click', ()=>{
//     lista.removeChild(li);  //BRISE SAMO li IZ HTML-a!!!!!!!!
//     });   
// });

// // radioDodaj.forEach((input, i)=>{
// //     input.addEventListener('change', ()=>{
// //         if(radioDodaj[0].checked){
// //             prepand()
// //         }
// //     });
// // });*/

///////////////////////////////////////////////////
let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let inputNoviZadatak = document.querySelector('#unesi');
// let btnDodaj = document.querySelector('#dodaj');
let radioDodajNaPocetak = document.querySelector('#dodajNaPocetak');

//1. nacin
// liZadaci.forEach(li =>{
//     li.addEventListener('click', e=>{
//         console.log(e);
//         console.log(e.target);
//         e.target.remove();
//     });
// });

//2. nacin
ulZadaci.addEventListener('click', e=>{
    console.log("kliknuto na ul");
    console.log(e);
    if(e.target.tagName == 'LI'){
        console.log('kliknuto na li');
        e.target.remove();
    }   
});

// btnDodaj.addEventListener('click', e=>{
//     let noviZadatak = inputNoviZadatak.value;
//     let liNoviZadatak = document.createElement('li');
//     liNoviZadatak.textContent = noviZadatak;
//     ulZadaci.appendChild(liNoviZadatak);
//     inputNoviZadatak.value = '';
// });


inputNoviZadatak.addEventListener('keyup', e => {
    //console.log(e.keyCode);
    if(e.keyCode == 13){
        let noviZadatak = inputNoviZadatak.value;
        if(noviZadatak == "" || noviZadatak == null){
            alert('Morate uneti novi zadatak');
        }
        //console.log(radioDodajNaPocetak.value);
        //console.log(radioDodajNaPocetak.checked);
        else{
        let liNoviZadatak = document.createElement('li');
        liNoviZadatak.textContent = noviZadatak;
        if(radioDodajNaPocetak.checked == true){ // == true ne mora da se stavi jer ga po default-u racvuna kao checked
            ulZadaci.prepend(liNoviZadatak);
        }
        else{
            ulZadaci.appendChild(liNoviZadatak);
        }

        // let noviZadatak = inputNoviZadatak.value;
        // let liNoviZadatak = document.createElement('li');
        //liNoviZadatak.textContent = noviZadatak;
        // ulZadaci.appendChild(liNoviZadatak);
        inputNoviZadatak.value = '';
        }
    }
});


