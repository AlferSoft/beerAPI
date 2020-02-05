module.exports = server => {
  const compression = require("compression")
  const cors = require("cors")
  const bodyParser = require("body-parser")

  //setup compression gzip middleware
  server.use(compression())

  //cors set-up
  server.use(
    cors({
      credentials: true,
      origin: [
        "localhost:9000" //for the local react client
      ]
    })
  )

  //basic middleware setup
  server.use(bodyParser.json({limit: "5mb"}))
  server.use(bodyParser.urlencoded({extended: true, limit: "5mb"}))

  //routes
  const routeIndex = require("./routes/index.js")
  server.use("/api", routeIndex)
}

