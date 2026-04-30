const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  status: String,
  assignedInside: String,
  assignedOutside: String
});

module.exports = mongoose.model("Customer", customerSchema);