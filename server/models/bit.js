const mongoose = require('mongoose');

const bitSchema = new Mongoose.Schema({
	question: String,
	tid: String,
	user: {type: Mongoose.Schema.Types.ObjectId, ref: 'User'}, 
	negResponses: Number,
	posResponses: Number
});

module.exports = mongoose.model('Bit', bitSchema);
