/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

var bcrypt = require('bcrypt');
var SALT_LENGTH = 10;

module.exports = {
	attributes: {
		username: {
			type: 'string',
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			required: true
		},
		toJSON: function() {
			var obj = this.toObject();
			if ('undefined' !== obj.password) {
				delete obj.password;
			}
			return obj;
		}
	}
};
