let time01 = prompt("Digite o nome do primeiro time: ")
let gols01 = parseInt(prompt("Digite o número de gols do primeiro time: "))

let time02 = prompt("Digite o nome do segundo time: ")
let gols02 = parseInt(prompt("Digite o número de gols do segundo time: "))

if (gols01 > gols02) {
    alert("O vencedor é: " + time01)
} else if (gols02 > gols01) {
    alert("O vencedor é: " + time02)
} else {
    alert("Fim de jogo! Empate")
}