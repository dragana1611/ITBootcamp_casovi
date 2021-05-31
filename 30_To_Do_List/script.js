// 5.zadatak
let btnPosalji = document.getElementById('posalji');
let inpIme = document.getElementById('ime');
let pPrikaziIme = document.getElementById('prikaziIme');
btnPosalji.addEventListener('click', ()=>{
    let upisanoIme = inpIme.value;
    //console.log(upisanoIme);
    pPrikaziIme.innerHTML = `Zdravo ${upisanoIme}`;
});

btnPosalji.addEventListener('dblclick', () => {
    let upisanoIme = inpIme.value;
    alert(`Hello ${upisanoIme}`);
});

//5. zadatak drugi nacin
let inpPrezime = document.getElementById('prezime');
let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
let pPrikaziPrezime = document.getElementById('prikaziPrezime');

// btnPosaljiPrezime.addEventListener('click', ()=>{
//     pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inpPrezime.value}`;
// });

btnPosaljiPrezime.addEventListener('click', e=>{
    e.preventDefault();
    console.log(e);
    pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inpPrezime.value}`;
});

//7.zadatak
let inpKvBr = document.getElementById('kvadratBr');
let inpPolaBr = document.getElementById('polaBr');
let inpPovK = document.getElementById('povrsKrug');

let btnKvBr = document.getElementById('racKvadr');
let btnPolaBr = document.getElementById('racPolaBr');
let btnPovK = document.getElementById('racPovrsK');

let resKvBr = document.getElementById('resKvadrBr');
let resPolaBr = document.getElementById('resPolaBr');
let resPovK = document.getElementById('resPovrsK');

btnKvBr.addEventListener('click', e=>{
    e.preventDefault();
    resKvBr.innerHTML = `${inpKvBr.value**2}`;
});

btnPolaBr.addEventListener('click', e =>{
    e.preventDefault();
    let resPolaBroja = Number(inpPolaBr.value)/2;
    resPolaBr.innerHTML = resPolaBroja;
});

btnPovK.addEventListener('click', e =>{
    e.preventDefault();
    resPovK.innerHTML = `${inpPovK.value **2 * Math.PI}`;
});

//primer
let forma = document.getElementById('forma');
let inputJelo = document.getElementById('jelo');
let inputPice = document.getElementById('pice');
let pIspis = document.getElementById('ispis');
    forma.addEventListener('submit', e=>{
        e.preventDefault();
        pIspis.innerHTML = 
        `
        <ul>
            <li>Omo;ljeno jelo: ${inputJelo.value}</li>
            <li>Omo;ljeno pice: ${inputPice.value}</li>
        </ul>
        `;
        forma.requestFullscreen;
    });