alert("Verificador de ordem crescente")
let valor01 = parseFloat(prompt("Digite o primeiro valor: "))
let valor02 = parseFloat(prompt("Digite o segundo valor: "))

if (valor01 < valor02) {
    alert("Os valores em ordem crescente são: " + valor01 + ", " + valor02)
} else {
    alert("Os valores em ordem crescente são: " + valor02 + ", " + valor01)
}