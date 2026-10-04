let morango = parseFloat(prompt("Digite a quantidade de morangos: "))
let maca = parseFloat(prompt("Digite a quantidade de maçãs: "))

let precoMorango
let precoMaca

if (morango <= 5) {
    precoMorango = 2.50
} else {
    precoMorango = 2.20
}

if (maca <= 5) {
    precoMaca = 1.80
} else {
    precoMaca = 1.50
}

let totalMorango = morango * precoMorango
let totalMaca = maca * precoMaca

let total = totalMorango + totalMaca

if (morango + maca > 8 || total > 25) {
    total = total * 0.90
}

alert("O valor a ser pago pelo cliente é: R$ " + total.toFixed(2))