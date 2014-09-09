describe('Controller: mainController', function() {

    var scope;
    var todosMock;
    var mainController;
    var q;
    
  	beforeEach(module('todoController'));

    beforeEach(inject(function($q) {
        todosMock = {
            get: function () {
                var deferred = $q.defer();
            	deferred.resolve( { text: 'testing' } );
            	return deferred.promise;
            }
       };
    }));

    beforeEach(inject(function($rootScope, $controller, $q) {
        scope = $rootScope.$new();
        q = $q
        mainController = $controller('mainController', {
            $scope: scope, Todos: todosMock
        	});
        }));

    it('should call get on the todo service when getAllTodos is called',
    function() {
        spyOn(todosMock, 'get').andCallThrough();
        scope.getAllTodos();
        expect(todosMock.get).toHaveBeenCalled();
    });
});