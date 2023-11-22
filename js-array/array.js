console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Bia', 'Carlos', 'Ana') 
console.log(approved)

approved = ['Bia', 'Carlos', 'Ana']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3]) // Undefined

approved[3] = 'Paulo'
console.log(approved[3])

approved.push('Abia')
console.log(approved[4])
console.log(approved.length)

approved[9] = 'Rafael'
console.log(approved.length)
console.log(approved[8] === undefined)

console.log(approved)
approved.sort()
console.log(approved)

delete approved[1]
console.log(approved[1])
console.log(approved[2])

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(approved)