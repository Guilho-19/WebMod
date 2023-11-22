function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Você foi aprovado :)")
    } else {
        console.log("Você foi reprovado :(")
    }
}

soBoaNoticia(6)
soBoaNoticia(7)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo()
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([2, 1])