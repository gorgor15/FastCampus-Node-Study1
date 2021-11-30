// @ts-check

// const { log } = console
// const a = require("./MyModule")
// const b = require("./MyModule")
// const c = require("./MyModule")

// log(a === b, b === c, c === a)

const fs = require("fs")
const util = require("util")
// 비동기형태 callback-style
// fs.readFile("../app.js", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(result)
//   }
// })

// 동기형태 (서버에 들어가는건 최대한 피해주어야된다.)
// sync - style

// try {
//   const result = fs.readFileSync("../app.js", "utf-8")

//   console.log(result)
// } catch (error) {
//   console.log(error)
// }

// promise-style

async function main() {
  // 구 버전을 사용하였을경우
  // const result = await util.promisify(fs.readFile)("./app.js","utf-8")
  const result = await fs.promises.readFile("../app.js", "utf-8")
  console.log(result)
}
main()
