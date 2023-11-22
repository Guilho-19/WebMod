function Car(velMax = 200, delta = 5) {
    let velAtual = 0

    this.acelerar = function () {
        if (velAtual + delta <= velMax) {
            velAtual += delta
        } else {
            velAtual = velMax
        }
    }

    this.getVelAtual = function () {
        return velAtual
    }
}

const uno = new Car
uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Car(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelAtual())