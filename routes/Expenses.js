const express = require("express");

const expenseController = require("../controllers/Exp");
const router = express.Router();

router.post("/insertExp", expenseController.insertNewExp);
router.get("/getAllExp", expenseController.getAllExpenses);
router.delete("/getAllExp/:id", expenseController.deleteExpense);

module.exports = router;
