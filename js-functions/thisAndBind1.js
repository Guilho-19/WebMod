const person = {
    greatings: "Bom dia",
    speak() {
        console.log(this.greatings)
    }
}

person.speak()
const speak = person.speak
speak()

const speakPerson = person.speak.bind(person)
speakPerson()