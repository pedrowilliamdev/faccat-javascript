alert("Verificador de estoque de produto")
let quantidadeAtual = parseFloat(prompt("Digite a quantidade atual: "))
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima: "))
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima: "))

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra!")
} else {
    alert("Efetuar compra!")
}   