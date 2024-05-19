const mongoose = require("mongoose");

const dbMongoConnection = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(DB_URI, {})
    .then((res) => {        
      console.log("**** DATABASE MONGODB SUCCESSFUL CONNECTION ****");
    })
    .catch((err) => {
      console.log(err);
      console.log("**** DATABASE MONGODB ERROR CONNECTION ****");
    });
};

module.exports = dbMongoConnection;
