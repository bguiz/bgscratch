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
	},

	remainingCount: function() {
		return this.filterProperty('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	nounPlural: function() {
		var remainingCount = this.get('remainingCount');
		return 'todo item' + ((remainingCount === 1) ? '' : 's'); 
	}.property('remainingCount')
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
	}.property('model.isCompleted'),

	isEditing: false,

	editTodo: function() {
		this.set('isEditing', true);
	},

	acceptChanges: function() {
		this.set('isEditing', false);
		this.get('model').save();
	},

	removeTodo: function() {
		var todo = this.get('model');
		todo.deleteRecord();
		todo.save();
	}
});
