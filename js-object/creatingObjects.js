// Notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Product(name, price, desc) {
    this.name = name
    this.getPriceWithOff = () => {
        return price * (1 - desc)
    }
}

const p1 = new Product("Caneta", 7.99, 0.15)
const p2 = new Product("Notebook", 2998.99, 0.25)
console.log(p1.getPriceWithOff(), p2.getPriceWithOff())

// Função factory
function createEmployer(name, basePayment, absents) {
    return {
        name, 
        basePayment,
        absents,
        getPayment() {
            return (basePayment / 30) * (30 - absents)
        }
    }
}

const e1 = createEmployer("João", 7980, 4)
const e2 = createEmployer("Maria", 11400, 1)
console.log(e1.getPayment(), e2.getPayment())

// Object.create
const daughter = Object.create(null)
daughter.name = "Ana"
console.log(daughter)

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)