$(document).ready(function(){

$("#task").keypress(insertTask);

var tasks = $("#listToDo");
var tasksDone =  $("#listDone");
$("#rmAll").on("click", removeAll);
$("#rmToDo").on("click", removeToDo);
$("#rmDoneList").on("click", removeDone);


function insertTask(event){
	if (event.keyCode===13){
	var task = $(event.target).val();
	event.preventDefault();
	var newTask = document.createElement("li");
	$(newTask).text(task); ///////////////poner dolar porque sin dolar no funciona 
	$(newTask).addClass("item toDo");

	//$(newTask).prop("class", "toDo");
	$(newTask).on("click", changeTask);
	tasks.append(newTask);
	$("#task").val("");
	}
}

function changeTask(e){
	var checkTask = e.target;
	if ($(checkTask).hasClass("toDo")){
		$(checkTask).removeClass("toDo");
		$(checkTask).addClass("already-done");
		tasksDone.append(checkTask);
	} else {
		tasks.append(checkTask);
		$(checkTask).addClass("toDo");
		//checkTask.id = "toDo";
		$(checkTask).removeClass("already-done");
	}
}

function removeAll(){
	$(".already-done").remove();
	$(".toDo").remove();
}

function removeToDo(){
	$(".toDo").remove();
}

function removeDone(){
	$(".already-done").remove();
}

	
});