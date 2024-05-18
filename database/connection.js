const mongoose = require("mongoose");

const dbMongoConnection = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(DB_URI, {})
    .then((res) => {        
      console.log("**** SUCCESSFUL CONNECTION ****");
    })
    .catch((err) => {
      console.log(err);
      console.log("**** DATABASE ERROR CONNECTION ****");
    });
};

module.exports = dbMongoConnection;
