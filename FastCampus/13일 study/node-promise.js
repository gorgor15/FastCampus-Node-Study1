// @ts-check
const fs = require("fs")

fs.readFile("../aa.txt", "utf-8", (error, value) => {
  console.log(value)
})

// 자바로 구현했다면 아래처럼 코딩해야된다.

// /**
//  *
//  * @param {string} filename
//  */
// function readFileInPromise(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile("../aa.txt", "utf-8", (error, value) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(error)
//     })
//   })
// }

// readFileInPromise("../aa.txt").then((value) => console.log(value))

async function main() {
  try {
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const result = await fs.promises.readFile("../aa.txt", "utf-8")
    console.log(result)
  } catch (error) {
    console.log("error", error)
  }
}
main()
