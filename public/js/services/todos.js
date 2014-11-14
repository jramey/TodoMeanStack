angular.module('todoService', [])
	.factory('Todos', ['$http', '$q', function($http, $q) {
		function returnPromise(apiCall){
			var deferred = $q.defer();

				apiCall.success(function(data) {
					deferred.resolve(data);
				});

				return deferred.promise;
		};
		return {
			get : function() {
				return returnPromise($http.get('/api/todos'));
			},
			create : function(todoData) {
				return returnPromise($http.post('/api/todos', todoData));
			},
			delete : function(id) {
				return returnPromise($http.delete('/api/todos/delete/' + id));
			}, 
			update : function(todoData){
				return returnPromise($http.post('/api/todos/update/', todoData));
			},
			clear: function() {
				return returnPromise($http.delete('/api/todos/clear'));
			}, 
			search: function(searchString) {
				return returnPromise($http.get('/api/todos/search/' + searchString));
			}
		}
	}]);