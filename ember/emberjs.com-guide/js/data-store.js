// Todos.Store = DS.Store.extend({
// 	revision: 13,
// 	adapter: 'DS.FixtureAdapter'
// });

Todos.Store = DS.Store.extend({
	revision: 13,
	adapter: 'Todos.LocalStorageAdapter'
});

Todos.LocalStorageAdapter = DS.LSAdapter.extend({
	namespace: 'emberjs.com-guides-todomvc'
});
