// requiring in mongoose
const mongoose = require('mongoose');

// creating convenience variable for Schema
const Schema = mongoose.Schema;

// making our schema with name, value, date
const transactionSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Enter a name for transaction',
	},
	value: {
		type: Number,
		required: 'Enter an amount',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// exporting Transaction
module.exports = Transaction;
