const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach(function(name, index, array) {
    console.log(`${index + 1}) ${name}`)
    console.log(array)
})

approved.forEach(name => console.log(name))

const showAprroved = approved => console.log(approved)
approved.forEach(showAprroved)