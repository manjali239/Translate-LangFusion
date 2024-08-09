const mongoose = require("mongoose");

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = mongooseConnect;





