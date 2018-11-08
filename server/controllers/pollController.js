const express = require('express');
const router = express.Router();

const Bit = require('../models/bit.js');


router.get('/', async(req,res,next) => {
	console.log(req.body, ' get all');

	try{
		const allBits = await Bit.find();
		await allBits.populate('user');
		res.json({
			status: 200,
			data: allBits
		});
	}		
	catch(err){
		res.json(err);
		console.log(err);
	}		
});

router.get('/:userId', async (req, res) => {
	try{
		const userBits = await Bit.find({user: req.params.userId});
		res.json({
			status: 200,
			data: userBits
		});
	}
	catch(err){
		console.log(err);
		res.json(err);
	}
});

router.post('/', async (req, res) =>{
	try{
		const createdBit = await Bit.create(req.body);
		
		console.log(foundPoll.json());
		res.json({
			status: 200,
			data: createdBit
		});
	}
	catch(err){
		res.json(err);
		console.log(err);
	}
});

router.put('/:id', async(req, res) => {
	try{
		const updatedBit = await.findByIdAndUpdate(req.params.id, req.body, {new: true});
		res.json({
			status: 200,
			data: updateBit
		});
	}
	catch(err){
		res.json(err);
		console.log(err);
	}
})

router.delete('/:id', async(req,res) => {
	try{
		const deletedBit = await Bit.findByIdAndRemove(req.params.id);
		res.json({
			status:200,
			data:deletedBit
		});
	}
	catch(err){
		console.log(err);
		res.json(err);
	}
});	
