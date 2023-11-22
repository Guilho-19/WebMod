Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const littleCar = [
    '{ "name": "Borracha", "price": 3.45 }',
    '{ "name": "Caderno", "price": 13.90 }',
    '{ "name": "Kit de Lapis", "price": 41.22 }',
    '{ "name": "Caneta", "price": 7.50 }'
]

const toObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = littleCar.map2(toObject).map2(justPrice)
console.log(result)