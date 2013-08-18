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

	deleteCompleted: function() {
		var completed = this.filterProperty('isCompleted', true);
		completed.invoke('deleteRecord');
		this.get('store').commit();
	},

	allAreDone: function(key, value) {
		if (typeof value === 'undefined') {
			var remainingCount = this.get('remainingCount');
			var totalCount = this.get('length');
			return (totalCount > 0 && remainingCount < 1);
		}
		else {
			this.setEach('isCompleted', value);
			this.get('store').save();
			return value;
		}
	}.property('remainingCount'),

	/* Display properties */

	remainingCount: function() {
		return this.filterProperty('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	completedCount: function() {
		var remainingCount = this.get('remainingCount');
		var totalCount = this.get('length');
		return totalCount - remainingCount;
	}.property('remainingCount'),

	nounPlural: function() {
		var remainingCount = this.get('remainingCount');
		return 'todo item' + ((remainingCount === 1) ? '' : 's'); 
	}.property('remainingCount'),

	hasCompleted: function() {
		return this.get('completedCount') > 0;
	}.property('completedCount')
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
