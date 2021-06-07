import /*{*/generateImage/*}*/ from "./general.js";
export let generateList = parent =>{
    let ul = document.createElement('ul');
    ul.style.overflow = "hidden";
    ul.style.listStyleType = "none";
    parent.appendChild(ul);
    return ul;
}

export let generateItem = (parent, src) =>{/*List*/
    let li = document.createElement('li');
    li.style.float = "left";
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
}
