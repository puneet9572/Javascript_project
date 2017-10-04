$(document).ready(function() {

	$('#addItem').on('click', addItem);
	$('#todos').on('mouseenter','#completeItem', completeItem);
	$('#todos').on('click','.deleteItem', deleteItem);
	$('#newTodo').on('keypress', function(event){
		if(event.which === 13){
			addItem();
			event.preventDefault();
		}
	});

		function addItem(event) {
		var newTodoAdd = $('#newTodo').val();
		$('#todos').append('<li id ="completeItem" class="deleteItem">&nbsp;' + newTodoAdd + '</li>');
		$('#newTodo').val('');	
	}

		function deleteItem(event){
			$(this).remove();
		}
		
		function completeItem(event){
			$(this).addClass('done');
	}
			
});


