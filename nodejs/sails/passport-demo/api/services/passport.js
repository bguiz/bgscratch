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

passport.use(
	(new (passportLocal.Strategy)(
		function(username, password, done) {
			process.nextTick(function() {
				findByUsername(username, function(err, user) {
					if (err) {
						return done(null, err);
					}
					if (! user) {
						return done(null, false, {
							message: 'Unknown user ' + username
						});
					}
					bcrypt.compare(password, user.password, function(err, res) {
						if (! res) {
							return done(null, false, {
								message: 'Invalid password'
							});
						}
						var returnUser = {
							username: user.username,
							createdAt: user.createdAt,
							id: user.id
						};
						return done(null, returnUser, {
							message: 'Logged in successfully'
						});
					});
				})
			});
		}
	))
);
