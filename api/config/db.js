const mongoose = require("mongoose");
// const mysql = require('mysql');
// require('dotenv').config()
require('dotenv').config({path: './config/.env'});


// exports.getConnection = async () => {
//   const db = await mysql.createConnection({
//     host: process.env.DB_MYSQL_HOST,
//     user: process.env.DB_MYSQL_USER,
//     password: process.env.DB_MYSQL_PWD,
//     database: process.env.DB_MYSQL_NAME
//   });
//   db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   return db;
// });
// }


exports.connectMongoDb = async () => {
  try {
    await mongoose
    .connect(
      `mongodb://127.0.0.1:27017`,
      // `mongodb+srv://${process.env.DB_USER_PASS}.mongodb.net/atypikhouse?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
      
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log("Mongo Databse connected");
  } catch (error) {
      console.error("Error occured when trying to connect Mongo database : ", error);
  }
};


