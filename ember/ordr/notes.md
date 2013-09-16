# Ember

## Intro

- Ember's MVC is a lot more similar to the Desktop MVC
	- similar to Rails
- Major objects in ember
	- Router
	- Controller
		- Long lived - and stay around for the life of the app
		- Not building a p[age, but an app
		- Caching built itno the framework
	- Model
	- View
		- Smarter interactive view objects
	- Template
- API changes
	- often invoilves deleting code
	- flux can be bad/ hard
- Explicit/. implicit
	- Compared to backbone - you have to write a line of code for everything you do
		- render: find template, re-render that on data changes, bind to data changes, manage memory of DOM events
	- Convention over configuration
		- Everything is done implicitly, and ember generates with conventional defaults. If you write code for something with a matching name, then ember ap uses them instead of auto-generated defaults.
		- But this means that naming all this is super-important - you must name them accoridng ot the expectations set by the ember framework
		- Note that code generation is not written out to file - instead it is done each time the app is run, in memory
			- This makes it immune to version changes
- Errors
	- Use the uniminified version during development because the error reporting is much better
	- If there is a silent failure (no errors)
		- Make sure you understand the framework
		- Follow naming conventions
		- Use the defaults
		- Everything should be quite easy - so if it is super complicated, consider alternative approaches

## Initialise

- Use the provided starter to mimimise any version change fluctuations issues
- Start web serve using ./bin/server
- Visit localhost:3000

# Simple app

- Automatic detection of application template
- Explicit naming of templates
- Use of outlet to render other templates
- Automatic geenration of index route

# Router

- routes are central to the ways the ember works -and you should spend more time reasoning about the routes than most other ember objects
- in a server MVC a controller is responsible for loading its own data; in ember h/w the controllers don't usually do this tasks, and instead route objects do so
- Naming conventions:
	- Router:
		- this.resource('tables')
		- this.resource('table', { path: ':table_id' })
	- Route: App.TablesRoute
	- Controller: App.TablesController
	- Model: App.Table
	- View: App.TablesView
	- Template: <script type="text/x-handlebars" data-template-name="tables">
		- Has now been replaced with: <script type="text/x-handlebars" id="tables">
	- Be careful about captialisation and singular/plural forms
- You ask controllers for the models in templates
	- not variables, or views, or directly from a model
	- You ask controllers because they give you proxied access to the models:
		- they manage a `model` property - so if you ask it for data, this is where it returns it from
	- controller s can also have their own custom methods, which you can query from the templates
- Chain of events:
	- Router maps to a route object
	- Route object specifies a model function (a  property)
		- Ember passes the returned model to the controller
		- App.MyModel.find() is used to look up a model instance from App.Store
	- Controller proxies the model
	- Template asks for the controller and is returned its proxied model

# Markup

- using foundation css for boilerplate styles
- more complex tempaltes can be split up using partials
	- the partial template reuses the controler, model data and all other context of the template it ppears in

# Nested routes

- ember's router allows you to specif not just flat resources, but also nested resources
	- this is where ember shines and shows its power
	- one of the reasons why a nested router is powerful is that it allows you to have a hierarchy of controller present at the same time
		- you can see the list of all tables, as well as the table details for a single table at the same time - and easily done
	- "if your UI is nested, your routes should be nested" - wycats

# Table detail

- Controller types
	- This is a key concept in Ember, and is part of what allows you to write minimal lines of code
	- Ember.Controller
		- proxies its own properties
		- {{foo}} ==> myCtrl.get('foo')
	- Ember.ObjectController
		- proxies the properties of its model
		- {{foo}} ==> myCtrl.model.get('foo')
	- Ember.ArrayController
		- proxies the properties of its model, but this time its model is expected to be an array
		- {{#each controller}} ==> myCtrl.model.forEach(...)
- Ember's default behaviour is to generate code for ember objects that you haven't defined, but you have defined another related ember object for, follwing a naming convention
	- Ember's code generation is in memory - it runs every time (active code generation)
	- Opposite of passive code generation - run once, and written out to files
- Controller life cycle
	- Server MVC programming usually has short live life cycles for controllers - only one is active at a time, instantiated per request
	- Ember does not follow this; all controllers are instantiated at run time
	- Only one instance of each controller is made, and it remains active throughout the duration the app is running
	- The model data it the controller acts upon is swapped - the controller does not maintain any state
	- Many controller are thus alive at the same time, and several will be actively rendering/ controlling views at the same time
