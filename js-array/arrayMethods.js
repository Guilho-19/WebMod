const racers = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
racers.pop() // removes the last
console.log(racers)

racers.push('Verstappen')
console.log(racers)

racers.shift() // removes the first
console.log(racers)

racers.unshift('Hamilton')
console.log(racers)

racers.splice(2, 0, 'Bottas', 'Massa')
console.log(racers)

racers.splice(3, 1)
console.log(racers)

const someRacers1 = racers.slice(2) 
console.log(someRacers1)

const someRacers2 = racers.slice(1, 4)
console.log(someRacers2)