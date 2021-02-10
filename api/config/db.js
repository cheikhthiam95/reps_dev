const mongoose = require("mongoose"); 
require('dotenv').config()

exports.connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
  })
    console.log("Mongo Databse connected");
  } catch (error) {
      console.error("Error occured when trying to connect Mongo database : ", error);
  }
};
 

 