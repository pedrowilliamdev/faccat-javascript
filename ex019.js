alert("Calculadora de peso ideal")
let nome = prompt("Digite o nome da pessoa: ")
let altura = parseFloat(prompt("Digite a altura da pessoa: "))
let sexo = prompt("Digite o sexo da pessoa (M ou F): ")

let pesoIdeal

if (sexo == "M") {
    pesoIdeal = (72.7 * altura) - 58
} else if (sexo == "F") {
    pesoIdeal = (62.1 * altura) - 44.7
} else {
    alert("Por favor, digite M ou F.")
}

if (pesoIdeal) {
    alert(nome + ", seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg")
}