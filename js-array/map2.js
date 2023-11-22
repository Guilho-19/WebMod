const littleCar = [
    '{ "name": "Borracha", "price": 3.45 }',
    '{ "name": "Caderno", "price": 13.90 }',
    '{ "name": "Kit de Lapis", "price": 41.22 }',
    '{ "name": "Caneta", "price": 7.50 }'
]

const toObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = littleCar.map(toObject).map(justPrice)
console.log(result)
