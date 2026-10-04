alert("Calculadora de votos")
let totalEleitores = prompt("Digite o número total de eleitores: ")

let votosBrancos = prompt("Digite o número de votos brancos: ")
let votosNulos = prompt("Digite o número de votos nulos: ")
let votosValidos = prompt("Digite o número de votos válidos: ")

let percentualBrancos = (votosBrancos / totalEleitores) * 100
let percentualNulos = (votosNulos / totalEleitores) * 100
let percentualValidos = (votosValidos / totalEleitores) * 100

alert("Percentual de votos brancos: " + percentualBrancos + "%")
alert("Percentual de votos nulos: " + percentualNulos + "%")
alert("Percentual de votos válidos: " + percentualValidos + "%")