const item = document.getElementById("item");
const todobox = document.getElementById("todolist");

item.addEventListener(
    "keyup",
    function (event) {
        if(event.key == "Enter"){
           addtodo(this.value);
            this.value="";
        }
        
    }
)

const addtodo = (item) => {
    const listitem =document.createElement("li");
    listitem.innerHTML= `
        ${item}
        <img src="x-circle.svg" alt="">
    `;
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("img").addEventListener(
        "click",
        function(){
            listitem.remove();  // removes the item from the list
        }
    )

    todobox.appendChild(listitem); // adds the item from the list
}