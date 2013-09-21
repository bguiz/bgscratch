/**
 * AuthController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

module.exports = {
	//renders the login page
	login: function(req, res) {
		res.view();
	},
	//called when login form is submitted
	process: function(req, res) {
		var passportCb = passport.authenticate('local', function(err, user, info) {
			if (err || !user) {
				return res.send({
					message: 'login failed'
				});
				res.send(err);
			}
			req.logIn(user, function(err) {
				if (err) {
					res.send(err);
				}
				return res.send({
					message: 'login successful'
				});
			});
		});
		passportCb(req, res);
	},
	//called when logout is called
	logout: function(req, res) {
		req.logout();
		res.send('logout successful');
	}
};
