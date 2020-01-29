require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")

//instantiate server
const server = express();
console.log("Server running and listening on port: " + process.env.PORT);

//connect to DB
mongoose
  .connect(process.env.DBURL, {useNewUrlParser: true})
  .then( db => 
    console.log(
      `Connected to Mongo! Database name: ${db.connections[0].name}`
    )
  )

//autoDisconnect from mongo on SIGINT
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "<Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  })
})

server.listen(3010)
