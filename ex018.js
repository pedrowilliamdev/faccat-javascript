alert("Calculadora de salário com extras")
let horas = parseFloat(prompt("Digite as horas trabalhadas: "))
let valor = parseFloat(prompt("Digite o valor da hora: "))

let total

if (horas > 160) {
    let extra = horas - 160
    total = (160 * valor) + (extra * valor * 1.5)
} else {
    total = horas * valor
}

alert("Salário total: R$ " + total.toFixed(2))