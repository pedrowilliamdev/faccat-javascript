alert("Calculadora de custo final de um carro")
let custo = parseFloat(prompt("Digite o custo de fábrica do carro: "))

let distribuidor = 28
let impostos = 45

let custoFinal = custo + (custo * (distribuidor / 100)) + (custo * (impostos / 100))

alert("O custo final do carro é: R$ " + custoFinal.toFixed(2))