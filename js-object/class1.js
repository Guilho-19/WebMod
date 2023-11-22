class launch {
    constructor(name = 'Genérico', value = 0) {
        this.name = name
        this.value = value
    }
}

class financeCicle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.launch = []
    }

    addLaunch(...launch) {
        launch.forEach(l => this.launch.push(l))
    }

    summary() {
        let valueConsolidated = 0
        this.launch.forEach(l => {
            valueConsolidated += l.value
        })
        return valueConsolidated
    }
}

const salary = new launch('Salário', 4500)
const lightBill = new launch('Luz', -220)

const bills = new financeCicle(6, 2018)
bills.addLaunch(salary, lightBill)
console.log(bills.summary())