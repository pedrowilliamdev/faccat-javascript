alert("Calculadora de reajuste salarial")
let salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "))
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "))

let novoSalario = salarioAtual * (1 + (percentualReajuste / 100))

alert("O novo salário do funcionário é: " + novoSalario.toFixed(2)) 