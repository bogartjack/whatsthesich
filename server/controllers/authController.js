const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, ers) => {
	console.log(req.body, ' the session');
	try{
		const user = await User.create(req.body);
		req.session.logged = true;
		req.session.username = req.body.username;
		req.session.userID = user._id;
		
		console.log(req.session.userID);
		
		res.json({
			status: 200,
			data: 'logged in yo'
		});
	}
	catch(err){
		console.log(err);
		res.send(err);
	}
});
