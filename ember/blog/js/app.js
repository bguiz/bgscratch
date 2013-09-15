App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
	    this.resource('post', {
		    path: ':post_id'
	    })
    });
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		// return posts;

		//asynchronously get the posts using AJAX
		return $.getJSON('http://tomdale.net/api/get_recent_posts/?callback=?').
			then(function(data) {
				return data.posts.map(function(post) {
					post.body = post.content;
					return post;
				});
			});
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params) {
//		return posts.findBy('id', params.post_id);

		// asynchronously get posts using AJAX
		return $.getJSON('http://tomdale.net/api/get_post/?id='+params.post_id+'&callback=?').
			then(function(data) {
				data.post.body = data.post.content;
				return data.post;
			});
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,

	actions: {
		edit: function() {
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

Ember.Handlebars.helper('formatDate', function(date) {
	return moment(date).fromNow();
});

Ember.Handlebars.helper('formatMarkdown', function(markdown) {
	return new Handlebars.SafeString(showdownConverter.makeHtml(markdown));
});

var showdownConverter = new Showdown.converter();

////fake data
//var posts = [{
//	id: '1',
//	title: 'ABC',
//	author: { name: 'bg' },
//	date: new Date('12-27-2012'),
//	excerpt: 'adsfad',
//	body: ' adsads asdad'
//}, {
//	id: '2',
//	title: '123',
//	author: { name: 'bg' },
//	date: new Date('12-27-2013'),
//	excerpt: 'gjghj ',
//	body: 'fghjghjr6gg fgj *bold* `code`'
//}];
