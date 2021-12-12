const express = require("express")

const app = express()
const PORT = 3000

app.use("/", (req, res, next) => {
  res.send("안녕 종헌")
})
app.listen(PORT, (req, res, next) => {
  console.log(`The server is running at ${PORT}`)
})
