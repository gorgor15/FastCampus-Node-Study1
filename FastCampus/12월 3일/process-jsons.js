// @ts-check

const fs = require("fs")
const { log } = console

function processJSON() {
  const rs = fs.createReadStream("jsons", {
    encoding: "utf-8",
    highWaterMark: 20,
  })

  let totalSum = 0

  let accumulatedJsonStr = ""

  rs.on("data", (chunk) => {
    if (typeof chunk !== "string") {
      return
    }
    accumulatedJsonStr += chunk

    const lastNewLineIdx = accumulatedJsonStr.lastIndexOf("\n")
    const jsonLinesStr = accumulatedJsonStr.substring(0, lastNewLineIdx)
    accumulatedJsonStr = accumulatedJsonStr.substring(lastNewLineIdx)

    totalSum += jsonLinesStr
      .split("\n")
      .map((jsonLine) => {
        try {
          return JSON.parse(jsonLine)
        } catch {
          return undefined
        }
      })
      .filter((json) => json)
      .map((json) => json.data)
      .reduce((sum, curr) => sum + curr, 0)
  })

  rs.on("end", () => {
    log(`totalsum`, totalSum)
  })
}
for (let watermark = 1; watermark < 50; watermark += 1) {
  processJSON(watermark)
}
