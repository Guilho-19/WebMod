const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nameAtribute = "Nota"
const valueAtribute = 7.87

const obj3 = {}
obj3[nameAtribute] = valueAtribute
console.log(obj3)

const obj4 = {[nameAtribute]: valueAtribute}
console.log(obj4)

const obj5 = {
    function1: function(){
        // ...
    },
    function2() {
        // ...
    }
}

console.log(obj5)