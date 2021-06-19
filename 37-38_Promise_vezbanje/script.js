let divOrder = document.querySelector('#order');
let formOrder = document.querySelector('#order form');
let inputOrder = document.querySelector('#capacity');



function getItems(resource, func) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            func(data);

        }
        else if (this.readyState === 4) {
            console.log("could not fetch data");
        }

    });
    request.open('GET', resource);
    request.send();
}

let click1 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    console.log(capacity);
    let itemsNoStock = [];
    getItems('json/stock.json', data => {
        data.forEach(item => {
            if (item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        //console.log(itemsNoStock);
        getItems('json/weights.json', data => {
            // console.log(data);
            let totalWeight = 0;
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    //potrebna je tezina itema/artikla
                    totalWeight += item.weight;
                }
            });
            //console.log(totalWeight);
            if (totalWeight > capacity) {
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in truck!! ";
                divOrder.appendChild(pMessage);
            }
            else {
                getItems('json/prices.json', data => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if (itemsNoStock.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let pMessage = document.createElement('p');
                    pMessage.style.fontWeight = "bold";
                    pMessage.style.fontSize = "24px";
                    pMessage.textContent = `Total order price: ${totalPrice}RSD`;
                    divOrder.appendChild(pMessage);
                });
            }
        });
    });
}


//formOrder.addEventListener('submit', click1);



///////////////////////////////////////////////////////
function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (this.readyState === 4) {
                reject("could not fetch data");
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let click2 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    //console.log(capacity);
    let itemsNoStock = [];
    getItemsReturnPromise('json/stock.json')
        .then((data) => {
            //console.log(data);
            data.forEach(item => {
                if (item.stock == 0) {
                    itemsNoStock.push(item.id);
                }
            });
            return getItemsReturnPromise('json/weights.json');
        })
        .then(data => {
            let totalWeight = 0;
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    //potrebna je tezina itema/artikla
                    totalWeight += item.weight;
                }
            });
            //console.log(totalWeight);
            if (totalWeight > capacity) {
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in truck!! ";
                divOrder.appendChild(pMessage);
            }
            else {
                return getItemsReturnPromise('json/prices.json');
            }
        })
        .then(data => {
            if (data !== undefined) {
                let body = document.body;
                let tabela = document.createElement('table');
                let tr1 = document.createElement('tr');
                let th1 = document.createElement('th');
                th1.textContent = 'Naziv artikla';
                let th2 = document.createElement('th');
                th2.textContent = 'Cena artikla';
                tr1.appendChild(th1);
                tr1.appendChild(th2);
                tabela.appendChild(tr1);

                let totalPrice = 0;
                data.forEach(item => {
                    if (itemsNoStock.includes(item.id)) {
                        let trItem = document.createElement('tr');
                        let td1 = document.createElement('td')
                        td1.textContent = item.item;
                        let td2 = document.createElement('td');
                        td2.textContent = item.price;
                        trItem.appendChild(td1);
                        trItem.appendChild(td2);
                        tabela.appendChild(trItem);

                        totalPrice += item.price;
                    }
                });

                let trLast = document.createElement('tr');
                let td1Last = document.createElement('th');
                td1Last.textContent = 'UKUPNO';
                let td2Last = document.createElement('th');
                td2Last.textContent = totalPrice;
                trLast.appendChild(td1Last);
                trLast.appendChild(td2Last);
                tabela.appendChild(trLast);
                body.appendChild(tabela);

                table.classList.add('tabela');
                td.classList.add('celija');
                tr.classList.add('red');

                // let pMessage = document.createElement('p');
                // pMessage.style.fontWeight = "bold";
                // pMessage.style.fontSize = "24px";
                // pMessage.textContent = `Total order price: ${totalPrice}RSD`;
                // divOrder.appendChild(pMessage);
            }
        })
        .catch(error => {
            console.log(error)
        });

    // getItems('json/stock.json')
    //     .then(
    //         getItems('json/weights.json')
    //     )
    //     .then(
    //         getItems('json/prices.json')
    //     )
    //     .then(
    //         //ispisati ukupnu cenu svih artikala koji nisu na stanju
    //     )
}
formOrder.addEventListener('submit', click2);

/**d.	BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala. */


async function clickGetItems() {
    let data1 = await getItemsReturnPromise('json/stock.json');
    let capacity = inputOrder.value;
    //console.log(capacity);
    let itemsNoStock = [];
    data1.forEach(item => {
        if (item.stock == 0) {
            itemsNoStock.push(item.id);
        }
    });
    let data2 = await getItemsReturnPromise('json/weights.json');
    let totalWeight = 0;
    data.forEach(item => {
        if (itemsNoStock.includes(item.id)) {
            //potrebna je tezina itema/artikla
            totalWeight += item.weight;
        }
    });
    //console.log(totalWeight);
    let pMessage = document.createElement('p');
    if (totalWeight > capacity) {
        
        pMessage.style.fontWeight = "bold";
        pMessage.style.fontSize = "24px";
        pMessage.textContent = "Not enough capacity in truck!! ";
        
    }
    else {
        let data3 = await getItemsReturnPromise('json/prices.json');
        let totalPrice = 0;
        data.forEach(item => {
            if (itemsNoStock.includes(item.id)) {
                let trItem = document.createElement('tr');
                let td1 = document.createElement('td')
                td1.textContent = item.item;
                let td2 = document.createElement('td');
                td2.textContent = item.price;
                trItem.appendChild(td1);
                trItem.appendChild(td2);
                tabela.appendChild(trItem);

                totalPrice += item.price;
            }
        });
    }
    return pMessage;
}
//clickGetItems();
let click3 = event=>{
    event.preventDefault();
    clickGetItems()
    .then(para =>{
        divOrder.appendChild(para);
    })
    .catch(err =>{
        console.log(err);
    })
}
formOrder.addEventListener('submit', click3);