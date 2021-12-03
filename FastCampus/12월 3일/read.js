// @ts-check

// 위와 같은 파일에서 , a의 연속 구간(a block) b의 연속구간 (b block)의 개수를 세는프로그램

const fs = require("fs")
const { log } = console
const rs = fs.createReadStream("big-file", {
  encoding: "utf-8",
  highWaterMark: 65536 * 16,
})

/**  @type {Object.<string, number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}
/** @type {string | undefined} */
let prevCharacter
let chunkCount = 0
rs.on("data", (data) => {
  if (typeof data !== "string") {
    return
  }

  for (let i = 0; i < data.length; i += 1) {
    if (data[i] !== prevCharacter) {
      const newCharacter = data[i]

      if (!newCharacter) {
        // eslint-disable-next-line no-continue
        continue
      }
      prevCharacter = newCharacter
      numBlocksPerCharacter[newCharacter] += 1
    }
  }
  chunkCount += 1
})

rs.on("end", () => {
  log("Event:end")
  log("blockcount", numBlocksPerCharacter)
  log("chunkcount", chunkCount)
})
