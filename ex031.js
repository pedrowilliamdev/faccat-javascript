let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "))
let homem2 = parseInt(prompt("Digite a idade do segundo homem: "))

let mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "))
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "))

let homemMaior
let homemMenor
let mulherMaior
let mulherMenor

if (homem1 > homem2) {
    homemMaior = homem1
    homemMenor = homem2
} else {
    homemMaior = homem2
    homemMenor = homem1
}

if (mulher1 > mulher2) {
    mulherMaior = mulher1
    mulherMenor = mulher2
} else {
    mulherMaior = mulher2
    mulherMenor = mulher1
}

let soma = homemMaior + mulherMenor
let produto = homemMenor * mulherMaior

alert("A soma das idades é: " + soma)
alert("O produto das idades é: " + produto)