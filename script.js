EX1

let valorLitro = 6.8
let valorDaCompra = parseFloat(prompt("Qual o valor a ser abastecido?"))

let quantidadeLitros = parseFloat(valorDaCompra / valorLitro)
console.log(quantidadeLitros)

alert(`O Cliente abasteceu ${ parseInt(quantidadeLitros) } litros!`)

EX2

let valorCelcius = parseFloat(prompt("Qual valor em Celcius voce deseja transformar para Fahrenheit?"))
let valorFahrenheit = ((9 * valorCelcius)/5)+32

alert(`O valor ${valorCelcius}ºc em Fahrenheit é ${valorFahrenheit}ºF!`)

EX3

let valorFahrenheit = parseFloat(prompt("Qual valor em Fahrenheit voce deseja transformar para Celcius?"))
let valorCelcius = ((valorFahrenheit-32)*5)/9 

alert(`O valor ${valorFahrenheit}ºf em Celsius é ${valorCelcius}ºC!`)

EX4

let altura = parseFloat(prompt("Qual o valor da altura do seu retangulo?"))
let largura = parseFloat(prompt("Qual o valor da largura do seu retangulo?"))
let comprimento = parseFloat(prompt("Qual o valor do comprimento do seu retangulo?"))

let volume = altura * largura * comprimento

alert(`O volume é de: ${volume}m³`)

EX5

let valorInicial = parseFloat(prompt("Qual valor voce deseja elevar ao quadrado? (²)"))

let valorElevado = valorInicial * valorInicial

alert(`O valor ${valorInicial} ao quadrado é ${valorElevado}!`)

EX6

let valor1 = parseFloat(prompt("Qual o Primeiro valor?"))
let valor2 = parseFloat(prompt("Qual o Segundo valor?"))
let valor3 = parseFloat(prompt("Qual o Terceiro valor?"))
let valor4 = parseFloat(prompt("Qual o Quarto valor?"))
let valor5 = parseFloat(prompt("Qual o Quinto valor?"))

let somaValores = valor1 + valor2 + valor3 + valor4 + valor5

let mediaValores = somaValores/5

alert(`A soma dos valores informados é: ${somaValores} e a média das notas é: ${mediaValores}`)

EX7

let valor1 = parseFloat(prompt("Qual o Primeiro valor?"))
let valor2 = parseFloat(prompt("Qual o Segundo valor?"))

let resto = valor1 % valor2

alert(`O resto da divisão de ${valor1} por ${valor2} é: ${resto} !`)

EX8

let inputCaracteres = prompt("Quantos caracteres tem essa palavra? (insira a palavra abaixo)")

let valorCaracteres = inputCaracteres.length

alert(`Este texto tem ${valorCaracteres} caracteres`)

EX9

let input = prompt("Insira seu texto aqui!")

let PrimeiraLetra = input.charAt(0)
let UltimaLetra = input.charAt(input.length -1)

alert(`A primeira letra deste texto é ${PrimeiraLetra} e última é ${UltimaLetra}`)

EX10

alert("Atenção,insira seus dados abaixo!")

let nome = prompt("Insira seu nome aqui!")
let sobrenome = prompt("Insira seu sobrenome aqui!")
let idade = prompt("Insira sua iadade aqui!")
let setor = prompt("Insira seu setor aqui!")

let nomeCadast = nome.toUpperCase()
let sobrenomeCadast = sobrenome.toUpperCase()


alert(`Nome: ${nomeCadast} ${sobrenomeCadast} Idade: ${idade} Setor: ${setor}`)