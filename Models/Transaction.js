const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid:{
      type:String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    type:{
      type: String,
      required: [true, "Type is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    recurring:{
      type: String,
      required: [true, "Recurring is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },

);

const Transaction = new mongoose.model("transaction", transactionSchema);
module.exports = Transaction;
