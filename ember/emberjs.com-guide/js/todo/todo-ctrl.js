Todos.TodosController = Ember.ArrayController.extend({
	createTodo: function() {
		//get title from input text field
		var title = this.get('newTitle');
		if (! title.trim()) {
			return;
		}

		var todo = Todos.Todo.createRecord({
			title: title,
			isCompleted: false
		});

		this.set('newTitle', '');

		todo.save(); //persist to datastore
	}
});

Todos.TodoController = Ember.ObjectController.extend({
	isCompleted: function(key, value) {
		var model = this.get('model');
		if (typeof value === 'undefined') {
			//get
			return model.get('isCompleted');
		}
		else {
			//set
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
});
