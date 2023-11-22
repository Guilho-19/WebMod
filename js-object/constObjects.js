const person = { name: "João" }
person.name = "Pedro"
console.log(person)

// person = { name: "Ana" }

Object.freeze(person)

person.name = "Maria"
person.adress = "Rua ABC"
delete person.name

console.log(person.name)
console.log(person)

const personConst = Object.freeze({ name: "João" })
personConst.name = "Maria"
console.log(personConst)