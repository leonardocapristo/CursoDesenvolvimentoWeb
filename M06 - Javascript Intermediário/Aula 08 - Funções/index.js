let v1 = parseFloat(prompt("digite um valor"));
let v2 = parseFloat(prompt("digite outro valor"));

function soma(valor1, valor2) {
    return valor1 + valor2;
}

let result = soma(v1, v2);

alert(result);

document.getElementById("texto").innerHTML = result;





/*outra */


function alertaHello() {
    alert("Hello World !!!!!!!")
}