console.log(db)

let coll1 = db.collection('customers');
console.log(coll1);

let doc1 = coll1.doc('customer-01');
console.log(doc1);

let doc2 = db.doc('customers/customer-01');
console.log(doc2);

/*/CRUD - (Create, Read, Update, Delete)
//doc.set(....) -> Create
//doc.get(...) -> Read
//doc.update(...) -> Update
//doc.delete(...) -> Delete

Sve 4 metode kao rez vracaju Promise!!!!
nakon poziva potrebno je lancati .then() i .catch()!!!!!

*/
//Create
let c3 = {
    name:"Mika",
    age: 38,
    addresses: ["loznica", "cacak"],
    salary: 406.23
}; // JS objekat -> na osnovu njega zelimo dokument u bazi
db.collection('customers').doc('customer-03')
.set(c3)
.then(function(){
    console.log('uspesno dodat dokument u kolekciju customers');
})
.catch(function(error){
    console.log(`greska prilikom dodavanja dokumenta: ${error}`);
});

let date1 = new Date("2021-06-15 11:15:00");
let date2 = new Date("2021-06-15 13:00:00");
db.collection('tasks').doc('task-02')
.set({
    title: 'voznja bicikle',
    start_date: firebase.firestore.Timestamp.fromDate(date1),
    due_date: date2,
    description: "rekreacija"

}, {merge:true})
.then(()=>{
    console.log('uspesno dodat dokument');
})
.catch(err=>{
    console.log(`greska`, err);
});

