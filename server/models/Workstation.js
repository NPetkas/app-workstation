const { Schema, model } = require("mongoose");

const workstationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Workstation = model("Workstation", workstationSchema);

module.exports = Workstation;
