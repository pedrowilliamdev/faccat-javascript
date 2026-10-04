alert("Calculadora de idade em dias") 
let anos = prompt("Digite a idade em anos: ")   
let meses = prompt("Digite a idade em meses: ") 
let dias = prompt("Digite a idade em dias: ") 

let idade = (anos * 365) + (meses * 30) + parseInt(dias)

alert("A idade em dias é: " + idade)