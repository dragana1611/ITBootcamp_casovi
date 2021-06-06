let getSometing = ()=>{
    let obj = new Promise((resolve, reject)=>{
        //resolve("nesto resolve...");
        reject("nesto reject....");
    });
    return obj;
}
//console.log(getSometing());
//ako vrati resolve onda se izvrsava then grana
getSometing().then( data => {
    console.log(data);
}).catch(err=>{
    console.log(err);
});

