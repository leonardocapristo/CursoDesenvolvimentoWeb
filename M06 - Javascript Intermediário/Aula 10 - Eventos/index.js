function eventoClick() {
    alert("acionou um evente de click")
}

function eventoDblClick() {
    alert("evento click duplo")
}

function viraVermelho() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "red"
}

function viraAzul() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "blue"

}

function adicionaTexto() {
    let p = document.getElementById("texto")
    p.append("o mouse moveu <br>")
}


function limpaTexto() {
    document.getElementById("campoTexto").value = ""
}