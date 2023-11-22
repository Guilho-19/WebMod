function fun1() { }

const fun2 = function () { }

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.speak = function () { return "Opa" }
console.log(obj.speak())

function run(fun) {
    fun()
}

run(function () {
    console.log("Executando...")
})

function add(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

add(2, 3)(4)
const fiveAdd = add(2, 3)
fiveAdd(4)