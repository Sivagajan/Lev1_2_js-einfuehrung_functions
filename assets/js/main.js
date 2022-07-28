console.log('it works')

function hello() {
    console.log('Hello')
}
hello()

console.log('Arrowfunction >')

let hello2 = () => {return 'hello'}
console.log(hello2())
/* ++++++++++++++++++++++++ */
function adder(x, y){
    console.log(x+y)
}
adder(2,5)

console.log('Arrowfunction >')

let adder2 = (a,b) => {return a+b }
console.log(adder2(4,4))
/* ++++++++++++++++++++++++ */
function multi(x,y){
    // alert(x*y)
}
multi(3,5)

console.log('Arrowfunction >')
let multi2 = (a,b) => {return a*b }
// alert (multi2(4,4))

/* +++++++++++++++++++++++ */

function tester(x){
    console.log(typeof(x))
}

i = true
j = 'hi'
k = 1
l = {name:'John'};
m = [0,1]

tester(i)
tester(j)
tester(k)
tester(l)
tester(m)

console.log('Arrowfunction >')

let tester2 = (a) =>{return typeof(a)}
console.log(tester2(i))
console.log(tester2(j))
console.log(tester2(k))
console.log(tester2(l))
console.log(tester2(m))