function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}


var number = parseInt(prompt("Enter a integer number to check if it is even or odd"))
var result = checkEvenOrOdd(number)
alert(number + " is " + result)
