require("dotenv").config();

const express = require("express")

//instantiate server
const server = express();
console.log("Server running and listening on port: " + process.env.PORT);

server.listen(3010)
