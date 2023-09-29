var valores = [true, 5, false, "hola", "adios", 2]

// Primera parte

// Filtramos solamente los strings
var obtenerTextos = valores.filter(item => typeof item === 'string')

// Ordenamos los textos por la longitud de los caracteres (de mayor a menor)
obtenerTextos.sort((a, b) => b.length - a.length)

// Obtenemos ahora el texto más largo del array
var textoMasLargo = obtenerTextos[0]

alert(textoMasLargo)

// Segunda parte

// El resultado es true
var resultadoTrue = valores[0] && valores[2]

// El resultado es false
var resultadoFalse = valores[0] || valores[2]

alert("Resultado true:" + resultadoTrue)
alert("Resultado false:" + resultadoFalse)

// Tercera parte

// Filtramos solamente los números
var obtenerNúmeros = valores.filter(item => typeof item === 'number')

// Separamos los 2 números en 2 variables
var num1 = obtenerNúmeros[0]
var num2 = obtenerNúmeros[1]

var suma = num1 + num2
var resta = num1 - num2
var multiplicacion = num1 * num2
var division = num1 / num2
var resto = num1 % num2

alert(suma)
alert(resta)
alert(multiplicacion)
alert(division)
alert(resto)


