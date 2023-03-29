function calcMedia(n1, n2) {
    return (n1 + n2) / 2
}


var aluno = {
    nome: "Leo",
    notas: [5, 8],


    media: calcMedia
}

console.log(aluno)

console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

var aluno1 = {
    nome: "Leo",
    notas: [9, 7],


    media: calcMedia
}

console.log(aluno1)

console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))