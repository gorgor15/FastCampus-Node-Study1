/* eslint-disable */
// ===============================11.11강의 ============================
// =============================class.js 파일과 동일함 ==================
// Prototype

function Person(name) {
  this.name = name
}
Person.prototype.greet = function greet() {
  return `Hi, ${this.name}!`
}
//
function Student(name) {
  // @ts-ignore
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student("jongheon")
console.log(me.greet())
console.log(me.study())

console.log(me instanceof Student) // 어떤 클래스의 인스턴스인가
console.log(me instanceof Person)

const anotherPerson = new Person("Foo")
console.log(anotherPerson instanceof Student)
console.log(anotherPerson instanceof Person)

console.log([] instanceof Array, [] instanceof Object)
