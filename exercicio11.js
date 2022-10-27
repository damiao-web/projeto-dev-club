// programa onde mostra se as variaveis são ( impares) se são (pares) ou se estão todas misturadas//

const numberOne = 30
const numberTwo = 30
const numberThree = 21
const numberFour = 60

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0) {
    console.log("Todos são pares")
}
else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0) {
    console.log("Todos são impares")
}
else {
    console.log("São todos misturados, impares e pares")
}