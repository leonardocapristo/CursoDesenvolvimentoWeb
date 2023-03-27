var nomes = ["Igor", "José", "Maria"]

var notasA = [7.0, 6.5, 9.5]

var notasB = [8.0, 7.0, 8.5]


function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    var resultado = "Reprovado"

    if (media > 7) {
        resultado = "Aprovado"
    }

    return resultado
}

for (index in nomes) {


    console.log(nomes[index] + " - "
        + notasA[index] + " - "
        + notasB[index] + " - "
        + media(notasA[index], notasB[index]) + " - "
        + passou(media(notasA[index], notasB[index])))
}