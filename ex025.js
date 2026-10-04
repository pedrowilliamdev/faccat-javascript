let valor01 = parseFloat(prompt("Digite o primeiro valor: "))
let valor02 = parseFloat(prompt("Digite o segundo valor: "))
let valor03 = parseFloat(prompt("Digite o terceiro valor: "))

let maiorValor
let segundoMaior

if (valor01 > valor02) {
    maiorValor = valor1
    segundoMaior = valor2
} else {
    maiorValor = valor2
    segundoMaior = valor1
}

if (valor03 > maiorValor) {
    segundoMaior = maiorValor
    maiorValor = valor03
} else if (valor03 > segundoMaior) {
    segundoMaior = valor03
}

let somaDosMaiores = maiorValor + segundoMaior

alert("A soma dos dois maiores valores é: " + somaDosMaiores)