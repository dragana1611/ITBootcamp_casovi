//drugi nacin deljivosti prost broj
let n=15;
let i=2;
while(i<=n/2){
    if(n%i==0){
        console.log(`Broj ${n} nije prost`);
        break;//prekida izvrsenje petlje u kojoj se nasao
    }
    i++;
   
}
if(i>n/2  /*"Ako nismo usli u if unutar while-a"*/){
        console.log(`Broj ${n} je prost`);
}
//treci nacin
n=24; 
i=2;
let prime=true;
while(prime && (i<=n/2)){
    if (n%i==0){
        prime = false;
    }
    i++;
}
if(prime){
    console.log(`Broj ${n} je prost`);
}
else{
    console.log(`Broj ${n} nije prost`);
}

//FOR - naredba




