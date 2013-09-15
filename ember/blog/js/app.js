App = Ember.Application.create();

App.Router.map(function() {
    //define all the urls in our app
    //index route is implicit - ember generates one for you
    this.resource('about');
    this.resource('posts', function() {
	    //since this route is nested inside its parent, it doesn't replace the entire page,
	    //instead it gets rendered within the outlet of the view of the parent route
	    //the model backing this template changes depending on which post you are viewing, unlike the above two models
	    this.resource('post', {
		    path: ':post_id'
	    })
    });
});

//combine a model and a template together   using a route
App.PostsRoute = Ember.Route.extend({
	//model is a a method that ember uses to ask a route what data should be displayed for this template
	model: function() {
		// //synchronously return the posts array (POJSO)
		// return posts;

		//asynchronously get the posts using AJAX
		//jQuery's getJSON returns a promise, and ember detects this and waits for the promise to execute before rendering the template
		return $.getJSON('http://tomdale.net/api/get_recent_posts/?callback=?').
			then(function(data) {
				return data.posts.map(function(post) {
					// we use map to translate the data into the format that the template expects
					//note that the map function is executed immediately after the promise is resolved,
					//whereas ember does not do the rendering until the next digest cycle (run loop), so it doesn't render twice
					post.body = post.content;
					return post;
				});
			});
	}
});

//Responsible for giving the Post template its model
App.PostRoute = Ember.Route.extend({
	model: function(params) {
//		// synchronously return the posts array (POJSO)
//		//find by is -not- from Array.prototype - but from http://emberjs.com/api/classes/Ember.Array.html#method_findBy
//		//TODO find out how this works on a regular array though - does ember add to the array prototype?
//		return posts.findBy('id', params.post_id);

		// asynchronously get posts using AJAX
		//as in the PostsRoute (plural), ember waits till promise is resolved to render the data
		return $.getJSON('http://tomdale.net/api/get_post/?id='+params.post_id+'&callback=?').
			then(function(data) {
				data.post.body = data.post.content;
				return data.post;
			});
	}
});

//a controller is an object that stores app state and respond to events from templates
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

//note that registering a helper is done on Ember, not on App
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
