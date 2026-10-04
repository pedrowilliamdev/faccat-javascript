alert("Calculadora de média de um aluno")
let nota01 = parseFloat(prompt("Digite a primeira nota do aluno: "))
let nota02 = parseFloat(prompt("Digite a segunda nota do aluno: "))

let media = (nota01 + nota02) / 2

if (media >= 6) {
    alert("O aluno foi aprovado! Média final: " + media)
} else {
    alert("O aluno não foi aprovado! Média final: " + media)
}   