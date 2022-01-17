const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;