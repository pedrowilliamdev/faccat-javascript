alert("Verificador para voto")
let anoAtual = parseInt(prompt("Digite o ano atual: "))
let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

let idade = anoAtual - anoNascimento

if (idade >= 16) {
    alert("Você pode votar este ano!")
} else {
    alert("Você não pode votar este ano.")
}   