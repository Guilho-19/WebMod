Array.prototype.reduce2 = function (callback, inicialValue) {
    const inicialIndice = inicialValue ? 0 : 1
    let acummulate = inicialValue || this[0]
    for (let i = inicialIndice; i < this.length; i++) {
        acummulate = callback(acummulate, this[i], i, this)
    } 
    return acummulate
}

const plus = (total, value) => total + value
const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.reduce2(plus, 21))