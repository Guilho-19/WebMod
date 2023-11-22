const sequence = {
    _value: 1, // convenção
    get value() { return this._value++ },
    set value(value) { if (value > this._value) { { this._value = value } } }
}

console.log(sequence.value, sequence.value)
sequence.value = 1000
console.log(sequence.value, sequence.value)