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

if (valores[0] == true || valores[0] == false) {
    alert("Comparando valores booleanos en posición 0 \n del array con '||' es true \n ya que se encuentra en dicho índice uno u otro")
}
alert("Comparando valores booleanos en posición 0 \n del array con '&&' es false \n ya que en dicho índice no se pueden encontrar ambos booleanos al mismo tiempo")



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


