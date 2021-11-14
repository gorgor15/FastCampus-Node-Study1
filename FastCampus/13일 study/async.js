/**
 *
 * @param {number} duration
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, duration)
  })
}

// async await을 사용하면 훨씬더 깔끔한 코드가된다.
async function main() {
  console.log("first")
  await sleep(1000)
  console.log("second")
  await sleep(1000)
  console.log("third")
  await sleep(1000)
  console.log("finish")
  await sleep(1000)
}

main()
