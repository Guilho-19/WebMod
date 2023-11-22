class Grandpa {
    constructor(lastname) {
        this.lastname = lastname
    }
}

class Father extends Grandpa {
    constructor(lastname, profession = 'Professor') {
        super(lastname)
        this.profession = profession
    }
}

class Son extends Father {
    constructor() {
        super('Silva')
    }
}

const son = new Son
console.log(son)