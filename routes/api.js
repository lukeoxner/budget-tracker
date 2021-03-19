// requiring in router and Transaction
const router = require('express').Router();
const Transaction = require('../models/transaction.js');

// setting up our post route to post a new transaction
router.post('/api/transaction', ({ body }, res) => {
	Transaction.create(body)
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

// set up post route that can post bulk transactions instead of just one
router.post('/api/transaction/bulk', ({ body }, res) => {
	Transaction.insertMany(body)
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

// set up get route that finds all the transactions and sorts in descending order by date
router.get('/api/transaction', (req, res) => {
	Transaction.find({})
		.sort({ date: -1 })
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

// exporting router
module.exports = router;
