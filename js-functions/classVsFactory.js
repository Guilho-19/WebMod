function Person(name) {
    this.name = name

    this.speak = function () {
        console.log("My name is", this.name)
    }
}

const p1 = new Person("João")
p1.speak()