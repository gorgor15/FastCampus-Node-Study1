/* eslint-disable */
// lexical scope 는 var일때 x값은 2 block 하기떄문에
// let, const일땐 1로 출력
// var x = 1

const { count } = require("console")

// if(true){
//     var x = 2
// }

// console.log(x)

// Closure 예시

function and(x) {
  return function print(y) {
    return x + "and" + y
  }
}

const saltAnd = and("salt")
console.log(saltAnd("pepper"))
console.log(saltAnd("sugar"))

// 서로 다른 Closure을 만듦 (함수는 같지만 환경은 서로다르다)
const waterAnd = and("water")
console.log(waterAnd("juice"))

var numCounter = 0
function getCounter() {
  numCounter += 1
  var result = {
    count,
    total: 0,
  }
  function count() {
    result.total += 1
  }
  return result
}

var counterA = getCounter()
counterA.count()
counterA.count()

var counterB = getCounter()
counterB.count()
console.log(counterA.total, counterB.total, numCounter)
