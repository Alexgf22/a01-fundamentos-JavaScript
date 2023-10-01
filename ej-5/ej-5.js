let valores = [true, 5, false, "hola", "adios", 2]

// Primera parte

// Filtramos solamente los strings
let obtenerTextos = valores.filter(item => typeof item === 'string')

// Ordenamos los textos por la longitud de los caracteres (de mayor a menor)
obtenerTextos.sort((a, b) => b.length - a.length)

// Obtenemos ahora el texto más largo del array
let textoMasLargo = obtenerTextos[0]

alert(textoMasLargo)

// Segunda parte

// Sacamos el resultado true
let resultadoEsTrue = valores[0] || valores[2]

// Sacamos el resultado false
let resultadoEsFalse = valores[2] && valores[2]

alert("EL resultado es true:" + resultadoEsTrue)
alert("Resultado es false:" + resultadoEsFalse)



// Tercera parte

// Filtramos solamente los números
let obtenerNúmeros = valores.filter(item => typeof item === 'number')

// Separamos los 2 números en 2 variables
let num1 = obtenerNúmeros[0]
let num2 = obtenerNúmeros[1]

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2
let resto = num1 % num2

alert(num1 + " + " + num2 + " = " + suma)
alert(num1 + " - " + num2 + " = " + resta)
alert(num1 + " * " + num2 + " = " + multiplicacion)
alert(num1 + " / " + num2 + " = " + division)
alert(num1 + " % " + num2 + " = " + resto)


