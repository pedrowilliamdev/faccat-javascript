alert("Calculadora de salário total de um vendedor")
let salario = parseFloat(prompt("Digite o salário fixo do vendedor: "))
let vendas = parseFloat(prompt("Digite o valor total das vendas: "))

let comissao

if (vendas <= 1500) {
    comissao = vendas * 0.03
} else {
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05)
}

let salarioTotal = salario + comissao

alert("O salário total do vendedor é: R$ " + salarioTotal.toFixed(2))