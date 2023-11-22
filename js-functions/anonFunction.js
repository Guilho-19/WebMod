const add = function (x, y) {
    return x + y
}

const printResult = function (a, b, operation = add) {
    console.log(operation(a, b))
}

printResult(3, 4)
printResult(3, 4, add)
printResult(3, 4, function (x, y) {
    return x - y
})
printResult(3, 4, (x, y) => x * y)

const person = {
    speak: function () {
        console.log("Olá!")
    }
}

person.speak()