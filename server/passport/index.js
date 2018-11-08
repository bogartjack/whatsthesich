const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

passport.serializeUser((user, done) =>{
	console.log(user, 'serialized');
	done(null, {_id: user._id});
});

passport.deserializeUser((id, done) => {
	User.findOne({_id: id},
		'username',
		(err, user) => {
			console.log(user, 'deserialized');
			done(null, user)
		}
	)	
});

passport.use(local);

module.exports = passport;
