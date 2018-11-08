const axios = require('axios')
const express = require('express');
const router = express.Router();

router.get('/huffingtonPolls', async (req, res) => {
	axios.get('elections.huffingtonpost.com/pollster/api/v2/polls')
		.then(response =>{
			res.json({
				status: 200,
				data: response
			})
		})
		.catch(err=>{console.log(err)});
});

module.exports = router;
