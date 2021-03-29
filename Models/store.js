const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  user_id:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  },
  date:{
    type: Date,
    default: Date.now,
  }
  

});

module.exports = mongoose.model("Store", storeSchema);
