// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

//
// new Promise((resolve, reject) => {
//   console.log("Inside promise")
//   reject(new Error("First reject"))
//   console.log("before resolve")
//   resolve("First resolve")
//   console.log("after resolve")
// })
//   .catch((error) => {
//     console.log("error", error)
//   })
//   .then((value) => {
//     console.log("Inside First then")
//     console.log("value", value)
//   })

// then이 할수있는 또다른 특별한일

function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

returnPromiseForTimeout()
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((v) => {
    console.log(v)
  })
returnPromiseForTimeout()
