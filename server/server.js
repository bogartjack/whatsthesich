const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

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

const pollController = require('./controllers/pollController');
const authController = require('./controllers/authController');

app.use('/api/v1/polls', pollController);
'
app.listen(9000, () => {
	console.log('listening on port 9k');
});
