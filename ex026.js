let valor01 = parseFloat(prompt("Digite o primeiro valor: "))
let valor02 = parseFloat(prompt("Digite o segundo valor: "))
let valor03 = parseFloat(prompt("Digite o terceiro valor: "))

let maiorValor

if (valor01 > valor02) {
    maiorValor = valor01
} else {
    maiorValor = valor02
}

if (valor03 > maiorValor) {
    maiorValor = valor03
}

alert("O maior valor é: " + maiorValor)