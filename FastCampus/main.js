// @ts-check
// Formatting, Linting
// Formatting : Prettier
// Linting : ESLint

// Type checking : TypeScript
// 최소한 깔끔한 코드짤수있다.


// const someString ="Hello";

// const result = Math.log(someString);

// console.log(result)

const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode= 200
    res.end('Hello')
})

console.log('1');
setTimeout(()=>{
    console.log('2');
},0)

console.log('3');
const Port = 4000
server.listen(Port,()=>{
    console.log(`The server is llistening at port:${Port}`)
})