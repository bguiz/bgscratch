/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {
	var isAunthenticated = req.isAunthenticated();
	if (isAunthenticated) {
		return next();
	}
	else {
		return res.redirect('/login');
	}
};