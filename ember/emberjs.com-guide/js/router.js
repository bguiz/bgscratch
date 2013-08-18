/* TodoMVC in EmberJS */

//router

Todos.Router.map(function() {
	this.resource('todos', {path: '/'}, function() {
		//child routes
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return Todos.Todo.find();
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return Todos.Todo.find();
	}
});
