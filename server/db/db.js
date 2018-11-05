const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TheSich');

mongoose.connection.on('connected', () =>{
	console.log('Mongoose connected');
});

mongoose.connection.on('error', (err) => {
	console.log(err, ' mongoose didn\'t connect');
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose disconnected');
});
