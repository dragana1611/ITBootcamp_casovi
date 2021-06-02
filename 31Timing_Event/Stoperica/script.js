let inpStart = document.getElementById('start');
let inpPauza = document.getElementById('pauza');
let inpIspis = document.getElementById('ispis');
inpIspis.value = 1;
let timer = null;

inpStart.addEventListener('click', () =>{
    if(timer === null){
    timer = setInterval(() =>{
        inpIspis.value++;
    }, 1000);
}
});

inpPauza = addEventListener('click', () =>{
    clearInterval(timer);
    timer = null;
});