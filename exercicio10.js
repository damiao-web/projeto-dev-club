//Programa onde modtra se o número é divisivel por 5 e se ele é um número primo//


const number = 27
if (number % 2 === 0) {
    if (number % 5 === 0) console.log("O numero é par e divisivel por 5")

    else console.log("O numero é par e não divisivel por 5")
}

for (let i = 2; i < number; i++)
    if (number % i === 0) {
        console.log("Ele é par mas não é primo")
        break
    }

    else {
        if (i === number - 1) console.log("Ele é um numero primo")
    }