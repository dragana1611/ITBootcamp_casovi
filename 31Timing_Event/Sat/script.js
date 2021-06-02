function Vreme(){
let d = new Date();
let sat = d.getHours();
let minut = d.getMinutes();
let sekund = d.getSeconds();
let podne = "AM";
let myclock = document.getElementById('idclock');

if(sat==0){
    sat=12;
}
if(sat>12){
    sat=sat-12;
    podne = "PM"
}

sat = (sat<10) ? "0" + sat : sat;
minut = (minut < 10) ? "0" + minut : minut;
sekund = (sekund < 10) ? "0" + sekund : sekund;
let displayClock = sat + ":" + minut + ":" + sekund + " " + podne;
myclock.innerHTML = displayClock;

setTimeout(Vreme, 1000);
}
Vreme();