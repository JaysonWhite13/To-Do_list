const todoItems = document.getElementsByClassName("ToDoItems")[0];
const input = document.getElementById('userInput');
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if( event.key === "Enter" ){
        additems();
    }
});

function additems(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = documemt.createElement("i");
    var trashIcon = documemt.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fa-regular fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color = 'limegreen'
    });

    divChild.appendChild(checkIcon);

    trashIcon.classname = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    todoItems.appendChild(divParent);

    input.value = '';

}



