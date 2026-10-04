alert("Calculadora de salário final de um vendedor")
let CarrosVendidos = parseFloat(prompt("Digite o número de carros vendidos: "))
let totalVendas = parseFloat(prompt("Digite o valor total das vendas: "))
let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "))
let comissao = parseFloat(prompt("Digite o valor da comissão por carro vendido: "))

let comissaoTotal = (CarrosVendidos * comissao) + (totalVendas * 0.05)
let salarioFinal = salarioFixo + comissaoTotal

alert("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2))