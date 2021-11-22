// @ts-check

// require : 모듈을 가져오는방식

//

// CommonJS : require
// ECMAScript : export, import

// - node standard library에 있는 모듈은 절대경로로 가져온다.
// - 이 프로젝트 내의 다른파일은 상대경로를 지정해 가져온다.
// - 절대경로를 지정하면 module.paths의 경로들을 순서대로 검사하여 해당 모듈이 있으면 가장 첫 번째 것을 가져온다.
/* eslint-disable */
const animals = require("./animals")
console.log(animals)
