 const todolist=()=> {
    let item = document.getElementById("todoinput").value;
    let text = document.createTextNode(item);// creating text node for it
    let newelem = document.createElement("li");
    newelem.appendChild(text);
    document.getElementById("todolist").appendChild(newelem);
    newelem.onclick = removeItem;
}
function removeItem(e){
    e.target.parentElement.removeChild(e.target);
}

