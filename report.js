// report.js
const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  bpNumber: { type: String, required: true },
  name: String,
  age: Number,
  details: String
});

module.exports = mongoose.model("Report", reportSchema);