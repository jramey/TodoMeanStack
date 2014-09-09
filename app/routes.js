var TodoCollection = require('./models/todo');

module.exports = function(app) {
	app.get('/api/todos', function(req, res) {
		TodoCollection.find(function(err, todos) {
			if (err)
				res.send(err)

			res.json(todos); 
		});
	});

	app.post('/api/todos', function(req, res) {
		
	});

	app.delete('/api/todos/delete/:todo_id', function(req, res) {
	
	});
};