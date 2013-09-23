var passport = require('passport');

module.exports = {
	express: {
		customMiddleware: function(app) {
			console.log('Express middleware for passport');
			app.use(passport.initialize());
			app.use(passport.session());
		}
	}
};
