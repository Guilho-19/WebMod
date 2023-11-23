const students = [
    { name: "João", grade: 7.9 },
    { name: "Maria", grade: 9.2 }
]

let total1 = 0
for (var i = 0; i < students.length; i++) {
    total1 += students[i].grade
}

console.log(total1 / students.length)

const getGrade = student => student.grade
const plus = (total, actual) => total + actual
const total2 = students.map(getGrade).reduce(plus)
console.log(total2 / students.length)