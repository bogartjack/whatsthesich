const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	bits: [{type: mongoose.Schema.Types.ObjectId, ref: 'bits'}]
});

userSchema.methods ={
	checkPassword: (input) => {
		return bcrypt.compareSync(input, this.password);
	},
	hashPassword: (input) => {
		return bcrypt.hashSync(input, 12);
	}
}

userSchema.pre('create', (next) {
	if (!this.password){
		console.log('no password dog');
		next()
	}else{
		console.log('hash the pass');
		this.password = this.hashPassword(this.password);
		next();
	}
});

module.exports = mongoose.model('User', userSchema);
