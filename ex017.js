alert("Duração de um jogo de Xadrez")
let inicio = parseInt(prompt("Digite a hora de início do jogo: "))
let fim = parseInt(prompt("Digite a hora de fim do jogo: "))

let duracao

if (inicio < fim) {
    duracao = fim - inicio
} else {
    duracao = 24 - inicio + fim
}

alert("A duração do jogo foi de: " + duracao + " horas")