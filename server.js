const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();

// setting up all our middleware
app.use(logger('dev'));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// setting up our db connection to either use localhost or deployed location
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// requiring in our routes file
app.use(require('./routes/api.js'));

// starting the server listening on the port we chose earlier in this file
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
