let ladoA = parseFloat(prompt("Digite o valor do lado A: "))
let ladoB = parseFloat(prompt("Digite o valor do lado B: "))
let ladoC = parseFloat(prompt("Digite o valor do lado C: "))

if (ladoA < ladoB + ladoC) {

    if (ladoB < ladoA + ladoC) {

        if (ladoC < ladoA + ladoB) {
            alert("Formam um triângulo!")
        } else {
            alert("Não formam um triângulo!")
        }

    } else {
        alert("Não formam um triângulo!")
    }

} else {
    alert("Não formam um triângulo!")
}