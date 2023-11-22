const numbers = [1, 2, 3, 4, 5]

let result = numbers.map(function(e) {
    return e * 20
})

console.log(result)

const plus10 = e => e + 10
const triple = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numbers.map(plus10).map(triple).map(toMoney)
console.log(result)