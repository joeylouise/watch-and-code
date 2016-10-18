var todos = ['item1','item2','item3'];

function displayToDos(){
	console.log('My ToDos:', todos);
}

function addToDos(todo){
	todos.push(todo);
	displayToDos();
}

function changeToDo(position, newValue){
	todos[position] = newValue;
	displayToDos();
}

function deleteToDo(position){
	todos.splice(position, 1);
	displayToDos();
}