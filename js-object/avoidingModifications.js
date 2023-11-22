// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Qualquer', price: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(product))

product.name = 'Borracha'
product.desc = 'Borracha escolar branca'
delete product.tag
console.log(product)

// Object.seal
const person = { name: 'Juliana', age: 35 }
Object.seal(person)
console.log('Selado:', Object.isSealed(person))

person.lastname = 'Silva'
delete person.name
console.log(person)

// Object.freeze = selado + valores constantes