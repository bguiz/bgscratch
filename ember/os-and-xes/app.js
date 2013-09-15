App = Ember.Application.create({});

App.IndexRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		controller.send('reset');
	}
});

App.IndexController = Ember.ArrayController.extend({
	// properties
	unselectedContent: function() {
		return this.get('content').rejectProperty('selected');
	}.property('@each.selected'),

	_winCombos:
		[[0, 1, 2], [3, 4, 5], [6, 7, 8],
		 [0, 3, 6], [1, 4, 7], [2, 5, 8],
		 [0, 4, 8], [2, 4, 6]],

	_indicesForProperty: function(name) {
		return this.get('content').map(function(item, idx) {
			if (item.get(name)) {
				return idx;
			}
		}).compact();
	}, //.property('unselectedContent'),

	_hasWinningMove: function(name) {
		var indices = this._indicesForProperty(name);
		return this.get('_winCombos').some(function(winCombo) {
			return Ember.EnumerableUtils.intersection(winCombo, indices).length >= 3;
		});
	}, //.property('_indicesForProperty'),

	// actions
	actions: {
		userSelect: function(box) {
			if (box.get('selected') || this.get('over')) {
				return;
			}
			box.set('userSelected', true);
			if (this._hasWinningMove('userSelected')) {
				this.send('notify', 'You win!');
				this.set('over', true);
			}
			else {
				this.send('computerSelect');
			}
		},
		computerSelect: function() {
			var available = this.get('unselectedContent');
			var selection = Math.floor(available.get('length') * Math.random());
			available[selection].set('computerSelected', true);
			if (this._hasWinningMove('computerSelected')) {
				this.send('notify', 'Computer wins!');
				this.set('over', true);
			}
		},
		notify: function(msg) {
			Ember.run.next(function() {
				alert(msg);
			});
		},
		reset: function() {
			this.get('content').clear();
			this.set('content', 
				[{}, {}, {}, {}, {}, {}, {}, {}, {}].map(function() {
				return App.Box.create();
			}));
			this.set('over', false);
		}
	}
});

App.Box = Ember.Object.extend({
	userSelected: false,
	computerSelected: false,
	selected: Ember.computed.or('userSelected', 'computerSelected')
});
