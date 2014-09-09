angular.module('todoService', [])
	.factory('Todos', ['$http', '$q', function($http, $q) {
		return {
			get : function() {
				var deferred = $q.defer();
				$http.get('/api/todos').success(function(data) {
					deferred.resolve(data);
				});

				return deferred.promise;
			}
		}
	}]);