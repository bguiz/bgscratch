/* TodoMVC in EmberJS */

//router

Todos.Router.map(function() {
	this.resource('todos', {path: '/'}, function() {
		this.route('active');
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

Todos.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return Todos.Todo.filter(function(todo) {
			return (! todo.get('isCompleted'));
		});
	},

	renderTemplate: function(controller) {
		//override default render template, because convention over 
		//config means that ember will look for a template called 
		//'todos/active'
		this.render('todos/index', {
			controller: controller
		});
	}
});
