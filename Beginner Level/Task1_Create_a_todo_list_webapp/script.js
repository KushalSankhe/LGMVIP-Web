const toDoList = document.getElementsByClassName("to-do-list")[0];
const input = document.getElementById("input");
const iconTrash = document.getElementById("trash");

input.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
  }
});

function addItem(){
  var parentDiv = document.createElement("div");
  var childDiv = document.createElement("div");
  var iconCheck = document.createElement("i");
  var iconTrash = document.createElement("i");

  parentDiv.className = "item";
  parentDiv.innerHTML = '<div> <p>'+input.value+'</p> </div>';

  iconCheck.className = "fas fa-check-square";
  iconCheck.style.color = "lightgray";
  iconCheck.addEventListener("click", function(){
    iconCheck.style.color = "limegreen";
    parentDiv.style.textDecoration='line-through'
    
  })
  childDiv.appendChild(iconCheck);

  iconTrash.className = "fas fa-trash";
  iconTrash.style.color = "darkgray";
  iconTrash.addEventListener("click", function(){
    parentDiv.remove();
  })
  childDiv.appendChild(iconTrash);

  parentDiv.appendChild(childDiv);

  toDoList.appendChild(parentDiv);
  input.value = '';
}