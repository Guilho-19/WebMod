const students = [
    { name: 'João', grade: 7.3, schollarHolder: false },
    { name: 'Maria', grade: 9.2, schollarHolder: true },
    { name: 'Pedro', grade: 9.8, schollarHolder: false},
    { name: 'Ana', grade: 8.7, schollarHolder: true}
]

const result = students.map(a => a.grade).reduce(function(accumulator, actual) {
    console.log(accumulator, actual)
    return accumulator + actual
})