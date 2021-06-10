const counter = 1000000

// function
var dateF1 = new Date()
console.log('start func', `${dateF1.getHours()}:${dateF1.getMinutes()} ${dateF1.getSeconds()}:${dateF1.getMilliseconds()}`)
function f() {}
for(let i=0; i<counter; i++) {
  f()
}
var dateF2 = new Date()
console.log('end func', `${dateF2.getHours()}:${dateF2.getMinutes()} ${dateF2.getSeconds()}:${dateF2.getMilliseconds()}`)
var diffFunc = Math.abs(dateF1 - dateF2);


// class
var dateC1 = new Date()
console.log('start class', `${dateC1.getHours()}:${dateC1.getMinutes()} ${dateC1.getSeconds()}:${dateC1.getMilliseconds()}`)
class B {
  constructor() {}
}
for(let i=0; i<counter; i++) {
  new B()
}
var dateC2 = new Date()
console.log('end class', `${dateC2.getHours()}:${dateC2.getMinutes()} ${dateC2.getSeconds()}:${dateC2.getMilliseconds()}`)
var diffClass = Math.abs(dateC1 - dateC2);

console.log('diffFunc', diffFunc)
console.log('diffClass', diffClass)
