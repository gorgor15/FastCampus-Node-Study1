// @ts-check

/* eslint-disable no-console */
const express = require("express")
const app = express()
const fs = require("fs")
const PORT = 3000
// const bodyParser = require("body-parser")

const userRouter = express.Router()

// views엔진을 원하는곳으로 옮길수있음
// app.set("views",'src/views')
app.set("view engine", "pug")
app.use(express.json())

const USERS = {
  15: {
    nickname: "foo",
  },
  16: {
    nickname: "bar",
  },
}

userRouter.get("/", (req, res) => {
  res.send("User list")
})

userRouter.param("id", (req, res, next, value) => {
  // @ts-ignore
  req.users = USERS[value]
  next()
})

userRouter.get("/:id", (req, res) => {
  const resMimeType = req.accepts(["json", "html"])

  if (resMimeType === "json") {
    // @ts-ignore
    res.send(req.user)
  } else if (resMimeType === "html") {
    res.render("user-profile", {
      nickname: req.users.nickname,
    })
  }
})

userRouter.post("/", (req, res) => {
  res.send("User registered")
})

userRouter.post("/:id/nickname", (req, res) => {
  // req: {"nickname":"foo"}

  // @ts-ignore
  const { user } = req
  const { nickname } = req.body
  user.nickname = nickname

  res.send(`User nickname updated ${nickname}`)
})

app.use("/users", userRouter)

app.get("/", (req, res) => {
  res.render("user-profile", { message: "Hello pug" })
})

app.get("/hello", (req, res) => {
  res.render("hello")
})

app.listen(PORT, () => {
  console.log(`The Express server is listen at port : ${PORT}`)
})
