const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let downGrades1 = []
for (let i in grades) {
    if (grades[i] < 7) {
        downGrades1.push(grades[i])
    }
}

console.log(downGrades1)

let downGrades2 = grades.filter(function (grades) {
    return grades < 7
})

console.log(downGrades2)

let downGrades3 = grades.filter(grades => grades < 7)
console.log(downGrades3)