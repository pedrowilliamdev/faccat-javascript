alert("Calculadora de maçãs")
let macas = parseInt(prompt("Digite o número de maçãs compradas: "))

if (macas < 12) {
    let preco = 1.30
} else {
    let preco = 1.00
}

let custo = macas * preco
alert("O custo total da compra é: R$ " + custo.toFixed(2))