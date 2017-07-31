window.onload = function() {

	var todoList = [];
	if (localStorage.getItem('todo')!=undefined) {
		todoList = JSON.parse(localStorage.getItem('todo'));
		out();
	}
	document.getElementById('del').onclick = function () {
		todoList = [];
		localStorage.removeItem('todo');
		document.getElementById('out').innerHTML = "";
	}   
    document.getElementById('add').onclick = function () {
		var d = document.getElementById('in').value.replace(/\s+/g,' ');
        var temp = {};
		temp.todo = d;
		temp.check = false;
		var i = todoList.length;
		todoList[i] = temp;
		console.log(todoList);
		out();
		localStorage.setItem('todo',JSON.stringify(todoList) );
	}

	function out() {
		var output='';
		for (var key in todoList) {
			if (todoList[key] .check ) {
            output += '<input type="checkbox" checked>'; 

			}	
			else {
				output += '<input  id="' + key + 'A" type="checkbox">';
			}
			    output += '<span>' + todoList[key].todo + '</span><br>'; 
	
		}
		document.getElementById('out').innerHTML = output;
	}
}