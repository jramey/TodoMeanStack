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
		
		};

		$scope.deleteTodo = function(todo) {
			
		};
	}]);