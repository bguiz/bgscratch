// var App is a namespace to write all of our application code
var App = Ember.Application.create();
// namespace can be anything you like - but App is convention
// this single line boots ember, set up all controllers, views, and template rendering that is needed
// to see this, we'll actually need to render something - which we'll do in the HTML file
// note that this single line of code also generated the index route and controller, and renders it templates
// a single line of code does a lot

// Router

// define a bunch of URLs, each of which handle differne tactions in the application

//we define each of the resources that we are interested in
//each resource is actually a single route object
//routes can have sub routes
//NOTE App.Router - not App.Route
App.Router.map(function() {
	// '/'' => 'index'  this mapping is always generated by default - no need to specify
	this.resource('tables');
	// this will take us to the tables route - which we'll add to HTML
	//visiting an ember route goes through a sequence of objects when rendering objects
	//to the screen, one of them is the route object (singular)
});

//name of route must correspond to the name of the resource above
//custom objects in ember use extend as a means of inheritance
App.TablesRoute = Ember.Route.extend({
	//in the route, implement the model method to return the data that is required
	//to be displayed in that shoudl be used by the matching controller (tables controller)
	model: function() {
		//the return value is used to set the model property of the corresponding controller
		//at this stage, if you refresh the page, the page will not display anything,
		//as there will be an error - TableModel has yet to be defined
		return App.Table.find();
	}
});

//create a simple data model
//ember expects the name of the data store object to be store
//this is the object it will look in when you used .find(), etc, to get any models
App.Store = DS.Store.extend({
	//ember data is still ina  state of flux - so specifying a revision number is
	//similar to specifying a API version
	revision: 11,
	//DS.FixtureAdapter is an object, but we use a string instead because that lets
	//ember load/ initialise this when it wants to later on,
	//instead of when this store is specified
	adapter: 'DS.FixtureAdapter'
});

//define the model to be bound to this data store we have just created
App.Table = DS.Model.extend();

//models backed by a fixture adapter data store will be defined in a POJSO
//the only requirement is that each of them has an id attribute - which may be
//either a number or a string
App.Table.FIXTURES = [
	{id: 1},
	{id: 2},
	{id: 3},
	{id: 5},
	{id: 6},
	{id: 7}
];
