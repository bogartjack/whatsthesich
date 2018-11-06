const express = require('express');
const router = express.Router();

const Poll = require('../models/polls.js');

router.get('/', async(req,res,next) => {
	console.log(req.body, ' get all');

	try{
		const allPolls = await Poll.find();

		res.json({
			status: 200,
			data: allPolls
		});
	}		
	catch(err){
		res.json(err);
		console.log(err);
	}		
});

router.post('/', async (req, res) =>{
	try{
		const createdPoll = await Poll.create(req.body);
		console.log(foundPoll.json());
		res.json({
			status: 200,
			data: createdPoll
		});
	}
	catch(err){
		res.json(err);
		console.log(err);
	}
});

router.put('/:id', async(req, res) => {
	try{
		const updatedPoll = await.findByIdAndUpdate(req.params.id, req.body, {new: true});
		res.json({
			status: 200,
			data: updatePoll
		});
	}
	catch(err){
		res.json(err);
		console.log(err);
	}
})

router.delete('/:id', async(req,res) => {
	try{
		const deletedPoll = await Poll.findByIdAndRemove(req.params.id);
		res.json({
			status:200,
			data:deletedPoll
		});
	}
	catch(err){
		console.log(err);
		res.json(err);
	}
});	
