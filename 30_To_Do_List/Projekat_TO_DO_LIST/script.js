let lista = document.querySelectorAll('li');
lista.forEach(li => {
    li.addEventListener('click', ()=>{
        if(li.innerHTML.style.textDecoration == "line-through"){
            li.innerHTML.style.textDecoration = "none";
        }
        else{
            li.innerHTML.style.textDecoration = "line-through";
        }
    });
});