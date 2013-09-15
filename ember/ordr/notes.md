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

- 
