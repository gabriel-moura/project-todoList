//selecionando html
var lists = document.querySelector("#todo ul");
var input = document.querySelector("#todo input");
var button = document.querySelector("#todo button");

// trazendo dados salvos no storage 
var todos = JSON.parse(localStorage.getItem('todo-list')|| [])

function renderTodos(){
     
     lists.innerHTML= ''
     for(todo of todos){
          
          var todoElement = document.createElement("li");
          var todoText= document.createTextNode(todo);
          var linkElement= document.createElement("a");
          var textLinkDel = document.createTextNode("Excluir");

          linkElement.setAttribute("href","#")
          linkElement.setAttribute('onclick',' deleteTodos('+pos+') ')
          var pos = todos.indexOf(todo);
          
          
          linkElement.appendChild(textLinkDel);
          todoElement.appendChild(todoText);
          todoElement.appendChild(linkElement);

          lists.appendChild(todoElement);
          
     }
}
renderTodos();
function addTodos(){
     var valueinput = input.value;

     todos.push(valueinput)

input.value = '';

renderTodos()
saveTodos()
}


function deleteTodos(pos){

todos.splice(pos,1)

renderTodos()
saveTodos()
}

function saveTodos(){

localStorage.setItem('todo-list',JSON.stringify(todos))

}
button.onclick=  addTodos;

function testeEx(arr){
     let popped= arr;
     // Change this line
      let shifted= arr.shift()
return [popped,shifted]
     }

     console.log(testeEx(['challenge', 'is', 'not', 'complete']))