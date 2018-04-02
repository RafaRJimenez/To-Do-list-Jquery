$(document).ready(function(){

$("#task").keypress(insertTask);

var tasks = $("#listToDo");
var tasksDone =  $("#listDone");

function insertTask(event){
	if (event.keyCode===13){
	var task = $(event.target).val();
	event.preventDefault();
	var newTask = document.createElement("li");
	$(newTask).text(task); ///////////////poner dolar porque sin dolar no funciona 
	$(newTask).addClass("item");
	$(newTask).prop("id", "toDo");
	$(newTask).on("click", changeTask)
	tasks.append(newTask);
	$("#task").val("");
	}
}

function changeTask(e){
	var checkTask = e.target;
	if (checkTask.id==="toDo"){
		tasksDone.append(checkTask);
		checkTask.id = "Done";
	} else {
		tasks.append(checkTask);
		checkTask.id = "toDo";
	}
}




	
});