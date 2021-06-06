export let ime = "stefan";

function ispis(poruka){
    console.log(poruka);
}

export function zdravo(ime){
    ispis("zdravo"+" " +ime);
}


// nudim promenljivu ime i f-ju zdravo
//export {ime, zdravo};