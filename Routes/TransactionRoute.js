const express = require('express');
const { Router } = require('express')
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../Controllers/Transactioncontroller');

const router = express.Router();

//Routes
//add transaction
router.post('/add-transaction',addTransaction);

//edit transaction
router.post('/edit-transaction',editTransaction);

//Delete transaction
router.post('/delete-transaction',deleteTransaction);

//get transaction
router.post('/get-transaction',getAllTransaction);

module.exports = router;