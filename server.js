var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet Keeni for lunch',
	completed: false
},{
	id: 2,
	description: 'Grocery shopping',
	completed: false
}];

app.get('/',function(req,res){
	res.send('ToDo API App');
});

//GET /todos
app.get('/todos',function(req,res){
	res.json(todos);
})

//GET /todos/:id
app.get('/todos/:id',function(req,res){
	var todo_param_id = req.params.id;
	var matched = false;
	todos.forEach(function(todo){
		if (todo.id == todo_param_id){
			matched = true;
			res.json(todo);
		}
	})
	if (matched == false){
		res.status(404).send();
	}
	//res.send('Getting todos for id '+);
		
});
app.listen(PORT,function(){
	console.log('Express listening on port '+PORT+'!');
})