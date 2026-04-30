const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.post("/addCustomer", async (req, res) => {
  const c = new Customer(req.body);
  await c.save();
  res.send("Customer added");
});

router.get("/customers", async (req, res) => {
  res.json(await Customer.find());
});

router.post("/assign", async (req, res) => {
  const { customerId, insideId } = req.body;

  await Customer.findByIdAndUpdate(customerId, {
    assignedInside: insideId
  });

  res.send("Assigned");
});

module.exports = router;