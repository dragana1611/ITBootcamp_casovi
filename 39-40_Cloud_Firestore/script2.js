// db.collection('customers').doc('customer-01')
// .get()
// .then(doc => {
//     console.log(doc);
//     if(doc.exists){
//         let t = doc.data();
//         console.log(t);
//     }
//     else{
//         console.log(`no document with id: ${doc.id}`);
//     }
// })
// .catch(err=>{
//     console.log(`desila se greska: ${err}`);
// });

//dohvatanje svih dokumenata iz kolekcije
// db.collection('customers')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`document #${id}: ${t}`);
//        console.log(t);
//     });
// })
// .catch(err =>{
//     console.log(`error: ${err}`);
// });

//dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
// db.collection('users')
// .orderBy('surname', 'asc')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`document #${id}: ${t}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(`error: ${err}`);
// });

////dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
//isto kao i prethodno samo se sortira po vise polja

// db.collection('users')
// .orderBy('surname', 'asc')
// .orderBy('name', 'asc')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`document #${id}: ${t}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(`error: ${err}`);
// });

//dohvatanje ogranicenog broja dokumenata iz kolekcije

// db.collection('users')
// .orderBy('surname', 'asc')
// .orderBy('name', 'asc')
// .limit(2)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`document #${id}: ${t}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(`error: ${err}`);
// });

//dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene uslove- FILTRIRANJE

//dohvatiti sve korisnike mladje od 30 god // limit se na kraju izvrsava
// db.collection('customers')
//     .where('age', '>=', 30)
//     //.orderBy('age', 'asc') - where i orderBy mogu da se kombinuju po razlicitim poljima, ali to povlaci 1) da se sva polja navedena u where nalaze i u orderBy i 2) da postoji kompozitni index za sva polja i redoslede navedene u orderBy
//     //.orderBy('name', 'desc')
//     //.limit(2)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//dohvatiti sve korisnike cija je adresa u Nisu
// db.collection('customers')
//     .where('addresses', 'array-contains', 'Nis')
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//dohvatiti sve korisnike koji imaju 25 ili 31 god
// db.collection('customers')
//     .where('age', 'in', [25, 31])
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//dohvatiti sve korisnike koji se zovu pera ili laza
// db.collection('customers')
//     .where('name', 'in', ['Pera', 'Laza']) // in za vise vrednosti, contains samo za jednu
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//dohvatiti sve korisnike koji zive u nisu ili beogradu

// db.collection('customers')
//     .where('addresses', 'array-contains-any', ['Nis', 'Loznica'])
//     //.where ...array-contains beograd -> ako zelimo u nisu ili loznici i beogradu
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });


//Imaju platu veću ili jednaku od 500,

// db.collection('customers')
//     .where('salary', '>=', 500)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Imaju platu između 300 i 800,
// db.collection('customers')
//     .where('salary', '>=', 300)
//     .where('salary', '<=', 800)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Imaju platu manju od 900, i imaju 30 godina,

// db.collection('customers')
//     .where('salary', '<', 300)
//     .where('age', '==', 30)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Imaju adresu u Nišu ili Beogradu,
// db.collection('customers')
//     .where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Imaju 22, 25 ili 28 godina
// db.collection('customers')
//     .where('age', 'in', [22, 25, 28])
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });



//Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu
// db.collection('tasks')
//     .orderBy('title', 'asc')    
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Iz kolekcije tasks, pročitati sve zadatke, i koji:
//Su prioritetni,

// db.collection('tasks')
//     .where('priority', '==', true)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });


// Treba da se izvrše u tekućoj godini,
 let d = new Date();
 console.log(d);
// let year = d.getFullYear();
// let datum1 = new Date(year, 0, 1);
// let datum2 = new Date(year + 1, 0, 1)
// console.log(year, datum1, datum2);
// db.collection('tasks')
//     .where('due_date', '<', datum2)
//     .where('due_date', '>=', datum1)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Su završeni,
// let currentDate = new Date();
// console.log(currentDate);
// db.collection('tasks')
//     .where('due_date', '<=', currentDate)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

//Tek treba da počnu.

// let currentDate = new Date();
// console.log(currentDate);
// db.collection('tasks')
//     .where('start_date', '>', currentDate)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });



// Iz kolekcije movies, pročitati sve filmove:


// Koje je režirao George Lucas,
// db.collection('film')
//     .where('Director.name','==', 'Luc')
//     //.where('Director.surname',''=='', 'Besson')
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });



// Čija je ocena između 5 i 10,

// db.collection('film')
//     .where('Rating', '>=', 5)
//     .where('Rating', '<=', 10)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

    //.orderBy(firebase.firestore.FieldPath.documentId()) !!!!!!!
    //You can use .orderBy(firebase.firestore.FieldPath.documentId()). This allows you to use multiple equality filters and still do limit and startAfter.!!!!!!!!!!!



    //Kojima je žanr komedija, tragedija ili drama,
// db.collection('film')
//     .where('Genres', 'array-contains-any', ['Comedy', 'Tragedy', 'Drama'])
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });



// Koji su izašli u 21. veku.
// let vek = 
// db.collection('film')

//     .where('Release_year', '>', 2000)
//     .where('Release_year', '<=', 2100)
//     .get()
//     .then(documents => {
//         documents.forEach(doc => {
//             let t = doc.data();
//             let id = doc.id;
//             console.log(`document #${id}: ${t}`);
//             console.log(t);
//         });
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });

    
// Prikazati sve informacije o najbolje rangiranom filmu.

// db.collection('film')
// .orderBy('Rating', 'desc')
// .limit(1)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`document #${id}: ${t}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(`error: ${err}`);
// });


// Prikazati sve informacije o najslabije rangiranoj drami.
db.collection('film')
.where('Genres', 'array-contains', 'Drama')
.orderBy('Rating', 'desc')
.limit(1)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`document #${id}: ${t}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`error: ${err}`);
});