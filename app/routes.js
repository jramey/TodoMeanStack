var TodoCollection = require('./models/todo');

module.exports = function(app) {
	app.get('/api/todos', function(req, res) {
		TodoCollection.find(function(err, todos) {
			if (err)
				res.send(err)

			res.json(todos); 
		});
	});

	app.get('/api/todos/search/:searchString', function(req, res) {
		var pattern = new RegExp(req.params.searchString, 'i');
		TodoCollection.find( { text : { $regex: pattern } }, function(err, todos) {
			if (err)
				res.send(err);

			res.json(todos); 
		});
	});

	app.post('/api/todos', function(req, res) {
		TodoCollection.create( { text : req.body.text, done: false }, function(err) {
			if (err)
				res.send(err);

			res.send();
		});
	});

	app.delete('/api/todos/delete/:todo_id', function(req, res) {
		TodoCollection.remove( { _id : req.params.todo_id }, function(err) {
			if (err)
				res.send(err);

			res.send();
		});
	});

	app.delete('/api/todos/clear', function(req, res) {
		TodoCollection.remove( { done : true}, function(err) {
			if (err) 
				res.send(err);

			res.send();
		});
	});

	app.post('/api/todos/update/', function(req, res) {
		TodoCollection.update({ _id : req.body._id}, { $set: { done: req.body.done, text : req.body.text }}, function(err) {
			if (err)
				res.send(err);

			res.send();
		});
	});
};