const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('./passport');

require('db/db');

app.use(session({
	secret: 'something stupid',
	resave: false,
	saveUnitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session())


const pollController = require('./controllers/pollController');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');

app.use('/auth', authController);
app.use('/api/v1/polls', pollController);
app.use('/api/v1/data', dataController);
app.listen(9000, () => {
	console.log('listening on port 9k');
});
