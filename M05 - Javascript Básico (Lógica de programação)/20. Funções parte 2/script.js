// funções podem ser atribuidas a variaveis

function saudacao() {
    return "olá mundo";
}

var s = saudacao();

console.log(s);


var media = function (n1, n2) {
    return (n1 + n2) / 2
}


console.log(media(5, 6))