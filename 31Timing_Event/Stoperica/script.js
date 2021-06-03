let inpStart = document.getElementById('start');
let inpPauza = document.getElementById('pauza');
let inpIspis = document.getElementById('ispis');
let timer = null;
inpIspis.value = 1;

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