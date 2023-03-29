function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function media() {
        return (this.nota1 + this.nota2) / 2
    }
}


/* var calcMedia = function () {
    return (this.nota1 + this.nota2) / 2
}

var turma = [
    {
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },

    {
        nome: "João",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    }
]


var aluno = turma[1]

console.log(aluno)
console.log(aluno.media()) */