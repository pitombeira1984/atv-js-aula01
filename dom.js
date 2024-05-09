var nome = prompt("Digite seu nome:")
console.log(`Seu nome é ${nome}`)
var n1 = Number(prompt("Digite um numero"))
var n2 = Number(prompt("Digite outro numero"))
let soma = {n1:n1, n2:n2}
console.log(`A soma de ${soma.n1} + ${soma.n2} é igual ${n1+n2}`)
var idade = Number(prompt("Digite sua idade:"))
var ano = Number(prompt("Em que ano estamos:"))
let dados = {idade:idade, ano:ano}
console.log(`${nome}, sua idade atual é ${dados.idade} anos, estamos no ano de ${dados.ano}, então voce nesceu em ${ano-idade}`)
var raio = prompt("Insira o raio da circunferencia:")
const pi = 3.145
let circulo = [raio, pi]
console.log(`O circulo tem um raio de ${circulo[0]}, o "pi" é de ${circulo[1]}, então a area do circulo é: ${pi*(raio**2)}`)
var dc = prompt("Digite um valor em dolar:")
var dc = dc
console.log(`O valor de ${dc} dolar equivale a ${dc*0.85} euro`)
var p = prompt("Digite um valor em reais:")
console.log(`O valor de R$${p},00, com desconto de 10% é igual a R$${p - (p*0.1)}`)
var metro = prompt("Insira um valor em metros:")
console.log(`O valor de ${metro}m equivale a ${metro*100}cm`)
var sh = prompt("Informe quanto você ganha por hora:")
var ht = prompt("Informe o numero de horas trabalhadas por mês:")
var sb = sh * ht
var ir = sb * 0.11
var inss = sb * 0.08
var sind = sb * 0.05
var slm = sb - ir - inss - sind
let sl = {sh:sh, ht:ht, sb:sb, ir:ir, inss:inss, sind:sind, slm:slm}
console.log(`Com os ganhos por hora R$${sl.sh} e horas trabalhada ${sl.ht}h, o salário bruto é de ${sl.sb}. Com os descontos de IR R$${sl.ir}, INSS R$${sl.inss} e cindicato R$${sl.sind}, o salário liquido é de R$${sl.slm}`)
