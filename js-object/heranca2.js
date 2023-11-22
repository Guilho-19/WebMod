const grandpa = { attr1: "A" }
const father = { __proto__: grandpa, attr2: "B" }
const son = { __proto__: father, attr3: "C" }

console.log(son.attr1, son.attr2, son.attr3)

const car = {
    actualVel: 0,
    maxVel: 200,
    acceleratePlus(delta) {
        if (this.actualVel + delta <= this.maxVel) {
            this.actualVel += delta
        } else {
            this.actualVel = this.maxVel
        }
    },
    status() {
        return `${this.actualVel}Km/h de ${this.maxVel}Km/h`
    }
}

const ferrari = {
    model: "F40",
    maxVel: 324
}

const volvo = {
    model: "V40",
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.acceleratePlus(100)
console.log(volvo.status())

ferrari.acceleratePlus(300)
console.log(ferrari.status())