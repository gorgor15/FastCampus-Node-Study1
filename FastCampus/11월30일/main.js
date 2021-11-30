// @ts-check

// console.log("__dirname", __dirname)
// console.log("__filename", __filename)

// process.stdin.setEncoding("utf-8")
// process.stdin.on("data", (data) => {
//   console.log(data, data.length)
// })

// 명령줄인자
// console.log(process.argv)

// 한스트림을 다른 스트림에 넣어줌

// process.stdin.pipe(process.stdout)

// process.exit(1)

// let count = 0
// 인터벌단위로 실행시켜줌
// const handle = setInterval(() => {
//   console.log("inteval")
//   count += 1
//   if (count === 4) {
//     console.log("done")
//     clearInterval(handle)
//   }
// }, 1000)

// // 이 시간뒤에 실행되라
// setTimeout(() => {
//   console.log("timeout")
// }, 1000)

// os
const os = require("os")

console.log(
  ["arch", os.arch()],
  ["platform", os.platform()],
  ["cpus", os.cpus()],
  ["test", os.networkInterfaces()]
)

const path = require("path")
const fs = require("fs")
const file = fs.readFileSync("../11월27일/Hello", "utf-8")
const filepath = path.resolve(__dirname, "../11월27일/Hello")
console.log(filepath)
console.log(file)

const dns = require("dns")

dns.lookup("google.com", (err, address, family) => {
  console.log("address : %j family : IPv%s", address, family)
})
