const producers = ["Mercedes", "Audi", "BMW"]

function print(name, index) {
    console.log('${index + 1} + ${name}')
}

producers.forEach(print)
producers.forEach(producers => console.log(producers))