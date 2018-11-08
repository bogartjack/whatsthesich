const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
	try{
		const foundUser = await User.findOne({username: req.body.username});
		if (!foundUser){
			const user = await User.create(req.body);
			req.session.logged = true;
			req.session.username = req.body.username;
			res.json({
				status: 200,
				data: user
			});
		}
		else{
			res.json({
				status: 200,
				data: 'you must pick a unique username'
			})
		}
	}
	catch(err){
		console.log(err);
		res.send(err);
	}
});

router.post('/login', passport.authenticate('local'), async(req,res, next)=>{
	try{
		const foundUser = await User.findOne({username: req.user.username});
		req.session.logged = true;
		req.session.username = req.body.username;
	}
	catch(err){
		console.log(err);
		res.send(err);
	}
});

router.post('/logout', (req,res)=>{
	if (req.user) {
		req.logout();
		res.json({message: 'logging out'});
	}
	else {
		res.json({message: 'no user'});
	}
});

module.exports = router;
