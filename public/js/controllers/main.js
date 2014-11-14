angular.module('todoController', [])
	.controller('mainController', ['$scope','Todos', function($scope, Todos) {
		'use strict';
		$scope.newTodo = {};

		$scope.getAllTodos = function() {
			 Todos.get()
			.then(function success(data) {
				$scope.todos = data;
			});
		};

		$scope.getAllTodos();

		$scope.createTodo = function() {
			if ($scope.newTodo.text) {
				Todos.create($scope.newTodo)
				.then(function() {
					$scope.getAllTodos();
					$scope.newTodo = {}; 
				});
			}
		};

		$scope.deleteTodo = function(todo) {
			Todos.delete(todo._id)
			.then(function() {
				var index = getIndexOf(todo._id);
				$scope.todos.splice(index);
			});
		};

		$scope.updateTodo = function(todo) {
			Todos.update(todo)
			.then(function() {
				var index = getIndexOf(todo._id);
				todo.editing = false;
				$scope.todos[index] = todo;
			});
		};

		$scope.search = function() {
			if($scope.searchString) {
				Todos.search($scope.searchString)
				.then(function(data) {
					$scope.todos = data;
				});
			}
			else {
				$scope.getAllTodos();
			}
		};

		$scope.clearCompleted = function() {
			Todos.clear().then(function() {
				clearCompletedTasks();
			});
		};

		$scope.toggleEdit = function(todo) {
			todo.editing = !todo.editing;
		};

		function getIndexOf(todoId) {
			for (var i = 0; i < $scope.todos.length; i++) { 
    			if ($scope.todos[i]._id == todoId) {
    				return i;
    			}
			}	
		}

		function clearCompletedTasks() {
			for (var i = 0; i < $scope.todos.length; i++) { 
    			if ($scope.todos[i].done === true)
    				$scope.todos.splice(i);
			}
		}
	}]);