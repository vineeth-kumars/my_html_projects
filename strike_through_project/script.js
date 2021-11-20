const todoList = [] //creating a array named as todolist
const todoListElement = document.getElementById("myUL")//creating todolistelement which takes objects list from id myUL
document.querySelector("#add_button").addEventListener("click",addTodo)//giving a click event listner to add-button event handler and giving a functon addTodo


function addTodo(eventtype) { // declaring function addtodo
  //Click event-handler of add button
   const todoText = document.querySelector("#myInput").value;//takes the text in #myInput as todotext
   if(todoText == ""){// if condition for if text is null
       alert('Please give a valid task')//displaying an alert to give a valid task
   } 
   else{// else condition
       const todoObject = {// taking the text as an object with following parameters
         id: todoList.length,// giving an id to the todotext in the todolist in increasing in length with every input of new todotext
         todoText: todoText,// giving a property as todotext
         isDone: false// is done parameter to give a boolean parameter which is used later.
       };
        todoList.unshift(todoObject);//unshift adds an element at the front of the list and avoids duplication
        displayTodos();// calling displayTodos function
   }
}

function displayTodos(){// declaring displayTodos function
  
todoListElement.innerHTML = "";//clear everything in the listElement
  
  document.querySelector("#myInput").value = "";//write the tasks of displaying todo list items
  todoList.forEach((item) => { // declaring a foreach loop to perform tasks on every item or objects.
    
    const { todoText, id, isDone } = item; // giving the parameters names to the objects or items in list
    const listElement = document.createElement("li");// creates an element li with listElement as name.
    const delBtn = document.createElement("span");// creates a delete with span attribute.
    delBtn.innerHTML = "&nbsp;=>delete";// to give a character space  between th todotext and dlt button.
    delBtn.setAttribute("data-id", id )//giving a set atribute method to the delbtn element.
    listElement.setAttribute("data-id", id)// giving a set attribute to listelement const.
    delBtn.addEventListener("click",function(eventtype){// adding an click event listner to the delbtn.
      
      const delId = eventtype.target.getAttribute("data-id")
      deleteTask(delId)
    })
    listElement.addEventListener("click",function(eventtype){//adding a click event to list/element
        console.log('text clicked');// return the (text clicked) text in console.
      const strikeid = eventtype.target.getAttribute("data-id") //creating a strikeid giving a attribute .
      strikeTask(strikeid)//calling striketask function with strike id parameter
    })
    listElement.innerHTML = todoText;
    if(isDone){//creating if condition for isdone parameter.
      listElement.classList.add("checked")
    }
    listElement.appendChild(delBtn);//listelement can change with appendchild method.
    todoListElement.appendChild(listElement);// todolistElement can be appended with appendchild method.
  });
}

function deleteTask(delId){// declaring the deletetask function
  todoList.splice(todoList.findIndex((item) => item.id == delId), 1);// using splice method by finding the itemid by findindex method inthe todolist array.
  console.log(todoList) //returns the todolist in console .
  displayTodos();// calling the displayTodos function after deletion of the item.
}

function strikeTask(strikeId){// declaring a function strikeTask.
  const selectedTodoTask = todoList.findIndex(item => item.id == strikeId);//compares the item id with strike id by using findIndex method.
  todoList[selectedTodoTask].isDone// checks the boolean (isdone) for the selectedtodotask(id of item).
    ? (todoList[selectedTodoTask].isDone = false)
    : (todoList[selectedTodoTask].isDone = true);
    displayTodos();// calling the displaytodos function after strike through if the boolean is false.

}