const mongoose = require('mongoose');

const pollSchema = new Mongoose.Schema({
	question: String,
	rating: Number,
	availResponses: [{type: String}]
});

module.exports = mongoose.model('Poll', pollSchema);
