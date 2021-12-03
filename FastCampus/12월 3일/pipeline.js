// @ts-check

const { log, error } = console

const fs = require("fs")

const stream = require("stream")
const zlib = require("zlib")
const util = require("util")

async function gzip() {
  return util.promisify(stream.pipeline)(
    // 압축
    fs.createReadStream("big-file"),
    zlib.createGzip(),
    fs.createWriteStream("big-file.gz")
  )
}

async function ungzip() {
  return util.promisify(stream.pipeline)(
    fs.createReadStream("big-file.gz"),
    zlib.createGunzip(),
    fs.createWriteStream("big-file.unzipped")
  )
}

async function main() {
  await gzip()
  await ungzip()
}

main()
