Todos.EditTodoView = Ember.TextField.extend({
	classNames: ['edit'],

	insertNewline: function() {
		//NOTE bug in ember - see https://github.com/emberjs/data/issues/1024#issuecomment-21645554
		// this.get('controller').acceptChanges();
		this.$().blur();		
	},

	focusOut: function() {
		this.get('controller').acceptChanges();
	},

	didInsertElement: function() {
		this.$().focus();
	}
});
