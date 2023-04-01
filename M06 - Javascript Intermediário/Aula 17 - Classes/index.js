class Carro {
    constructor(valor1, valor2, valor3) {

        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzina() {
        return this.modelo + " buzinou biiiiiiiiii"

    }
}

const carro1 = new Carro("Chevrolet", "Celta", 2012);
const carro2 = new Carro("Fiat", "Uno", 2001);
console.log(carro1);
console.log(carro2.buzina());

carro1.modelo = "Onix"

console.log(carro1)


