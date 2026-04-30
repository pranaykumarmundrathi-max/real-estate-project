const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  customerId: String,
  employeeId: String,
  audio: String,
  selfie: String,
  time: Date
});

module.exports = mongoose.model("Visit", visitSchema);