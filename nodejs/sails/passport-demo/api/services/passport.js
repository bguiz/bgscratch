var passport = require('passport');
var passportLocal = require('passport-local');
var bcrypt = require('bcrypt');

function findById(id, callback) {
	//TODO - where is User object declared?
	User.findOne(id).done(function(err, user) {
		//TODO collapse into one if doing nothing special here
		if (err) {
			return callback(err, null);
		}
		else {
			return callback(null, user);
		}
	});
}

function findByUsername(uname, callback) {
	User.findOne({
		username: uname
	}).done(function(err, user) {
		//TODO collapse into one if doing nothing special here
		if (err) {
			return callback(err, null);
		}
		else {
			return callback(null, null);
		}
	});
}

//whn serializing/ deserializing the sessions to persist login state,
//we only need to store the user IDs 
passport.serializeUser(function(user, done) {
	done(null, user.id)
});

passport.deserializeUser(function(id, done) {
	findById(id, function(err, user) {
		done(err, user);
	});
});
