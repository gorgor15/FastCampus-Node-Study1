const fs = require("fs")

// const result = fs.readFileSync("./Hello")

// const bufg = Buffer.from([97, 98, 99, 100, 101])

// console.log(bufg.compare(result))

// const bufA = Buffer.from([0])
// const bufB = Buffer.from([3])
// const bufC = Buffer.from([2])
// const bufD = Buffer.from([6])

// const bufs = [bufA, bufB, bufC, bufD]

// // bufs.sort(Buffer.compare)
// bufs.sort((a, b) => a.compare(b))
// console.log(bufs)

// LE : little Endian
// BE : Big Endian

// const buf = Buffer.from([0, 0, 1, 0])

// function readInt32LE(array) {
//   return array[0] + array[1] * 256 + array[2] * 256 ** 2 + array[3] * 256 ** 3
// }

// function readInt32BE(array) {
//   return array[0] + array[1] * 256 + array[2] * 256 ** 2 + array[3] * 256 ** 3
// }

// const offset = 0
// const { log } = console
// log(`our function :`, readInt32LE(buf))
// log(`orig function :`, buf.readInt32LE(0))

// log(`BE our function :`, readInt32BE(buf))
// log(`BE orig function :`, buf.readInt32BE(0))
// 1 byte = 8 bit는 0 이상 255 이하의 값 0~2^8-1

// stream (데이터가 흐르는 관 관을 a에서 b로 꽂을수있고 b에서 c로 꽂을수있음)

// const stream = fs.createReadStream("./Hello")

// 스트림은 처리해야될 알고리즘에따라 다르지만
// stream.pipe(process.stdout)

const buf = Buffer.from([0, 1, 1, 0])

function read(array) {
  return array[0] + array[1] * 256 + array[2] * 256 ** 2 + array[3] * 256 ** 3
}

console.log(read(buf))

console.log(buf.readInt32BE(0))

const stream = fs.createReadStream("./Hello")

stream.pipe(process.stdout)
