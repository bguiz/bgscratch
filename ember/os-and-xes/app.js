App = Ember.Application.create({});

App.IndexRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		controller.send('reset');
	}
});

App.IndexController = Ember.ArrayController.extend({
	// properties

	// actions
	actions: {
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
