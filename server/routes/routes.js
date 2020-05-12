const express = require("express");
const router = new express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controller/transaction");
const Expense = require("../models/Transaction");

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransaction);

router.route("/insert").post((req, res) => {
  const expense = new Expense();
  expense.description = req.body.desc;
  expense.amount = req.body.amount;
  expense.month = req.body.month;
  expense.year = req.body.year;

  expense.save(function (err) {
    if (err) res.send(err);
    res.send("Expense successfully added!");
  });
});

router.route("/update").post(function (req, res) {
  const doc = {
    description: req.body.description,
    amount: req.body.amount,
    month: req.body.month,
    year: req.body.year,
  };
  console.log(doc);
  Expense.update({ _id: req.body._id }, doc, function (err, result) {
    if (err) res.send(err);
    res.send("Expense successfully updated!");
  });
});

router.get("/delete", function (req, res) {
  var id = req.query.id;
  Expense.find({ _id: id })
    .remove()
    .exec(function (err, expense) {
      if (err) res.send(err);
      res.send("Expense successfully deleted!");
    });
});

router.get("/getAll", function (req, res) {
  var monthRec = req.query.month;
  var yearRec = req.query.year;
  if (monthRec && monthRec != "All") {
    Expense.find({ $and: [{ month: monthRec }, { year: yearRec }] }, function (
      err,
      expenses
    ) {
      if (err) res.send(err);
      res.json(expenses);
    });
  } else {
    Expense.find({ year: yearRec }, function (err, expenses) {
      if (err) res.send(err);
      res.json(expenses);
    });
  }
});

module.exports = router;