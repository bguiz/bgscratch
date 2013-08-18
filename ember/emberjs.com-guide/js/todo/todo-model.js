Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{ id: 1, title: 'Task 1', isCompleted: true },
	{ id: 2, title: 'Task 2', isCompleted: false },
	{ id: 3, title: 'Task 3', isCompleted: false }
];
