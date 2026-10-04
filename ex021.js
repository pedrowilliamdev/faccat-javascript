alert("Saldo atual de um cliente")
let conta = prompt("Digite o número da conta: ")
let saldo = parseFloat(prompt("Digite o saldo atual: "))
let debito = parseFloat(prompt("Digite o valor do débito: "))
let credito = parseFloat(prompt("Digite o valor do crédito: "))

let saldoAtual = saldo - debito + credito

alert("O saldo atual do cliente é: R$ " + saldoAtual.toFixed(2))

if (saldoAtual >= 0) {
    alert("Saldo Positivo")
} else {
    alert("Saldo Negativo")
} 