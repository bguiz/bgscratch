/* TodoMVC in EmberJS */

//router

Todos.Router.map(function() {
	this.resource('todos', {path: '/'}, function() {
		this.route('active');
		this.route('completed');
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

var filteredTodosRoute = function(active) {
	return {
		model: function() {
			return Todos.Todo.filter(function(todo) {
				return (active !== todo.get('isCompleted'));
			});
		},
		renderTemplate: function(controller) {
			this.render('todos/index', {
				controller: controller
			});
		}
	};
};

Todos.TodosActiveRoute = Ember.Route.extend(filteredTodosRoute(true));
Todos.TodosCompletedRoute = Ember.Route.extend(filteredTodosRoute(false));
