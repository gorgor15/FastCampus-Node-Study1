// @ts-check

/* eslint-disable no-console */
const express = require("express")
const app = express()
const fs = require("fs")
const PORT = 3000

app.use("/", async (req, res, next) => {
  console.log("Middleware 1")
  const fileContent = fs.promises.readFile("../app.js")

  const requestedAt = new Date()
  // 아래 app.use에서 requestedAt사용법
  // @ts-ignore
  req.requestedAt = requestedAt
  // @ts-ignore
  req.fileContent = fileContent
  next()
})

app.use((req, res) => {
  console.log("Middleware 2")

  // @ts-ignore
  res.send(`Requested at ${req.requestedAt},${req.fileContent}`)
})

app.listen(PORT, () => {
  console.log(`The Express server is listen at port : ${PORT}`)
})
