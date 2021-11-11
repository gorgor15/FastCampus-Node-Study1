/* eslint-disable */
// =======================11월 11일 let,const ========================

var x = 1
{
  var x = 2
  console.log(x) // 2
}
console.log(x) // 2

const y = 1
{
  const y = 2
  console.log(y) // 2
}
console.log(y) // 1

// =============================spread operator ==========================

// const overrides = {
//   DATABASE_HOST: "myhost.com",
//   DATABASE_PASS: "mypassword",
// }

// const config = {
//   DATABASE_HOST: "asdas",
//   DATABASE_PASS: "****",
//   DATABASE_USERNAME: "myuser",
//   ...overrides,
// }

/* 실행결과는 이렇게 나온다 (...overrides 넣는 위치가 중요함)
    DATABASE_HOST :'myhost.com',
    DATABASE_PASS : 'mypassword',
    DATABASE_USERNAME : 'myuser',
*/

const [head, ...rest] = [1, 2, 3]
console.log(head) // 1
console.log(rest) // 2,3

const personalData = {
  email: "abc@naver.com",
  password: "****",
}

const publicData = {
  nickname: "foo",
}

const overrides = {
  email: "fff@ff.com",
}
const user = {
  ...personalData,
  ...publicData,
  ...overrides,
}
console.log(user)

function foo(head, ...rest) {
  console.log(head) // 1
  console.log(rest) // 2,3,4 가나옴
}

foo(1, 2, 3, 4)
