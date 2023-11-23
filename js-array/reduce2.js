const students = [
    { name: 'João', grade: 7.3, schollarHolder: true },
    { name: 'Maria', grade: 9.2, schollarHolder: false },
    { name: 'Pedro', grade: 9.8, schollarHolder: true},
    { name: 'Ana', grade: 8.7, schollarHolder: false}
]

const allSchollarHolder = (results, schollarHolder) => results && schollarHolder
console.log(students.map(a => a.schollarHolder).reduce(allSchollarHolder))

const someSchollarHolder = (results, schollarHolder) => results || schollarHolder
console.log(students.map(a => a.schollarHolder).reduce(someSchollarHolder))