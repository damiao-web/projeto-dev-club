// Programa para gerar um número dois números de 1 a 10 e se os números forem iguais existe um ganhador //

const randomNumber =  Math.floor(Math.random() * (10 - 1) + 1)
const winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

if (randomNumber === winningNumber){
    console.log("Você Ganhou")
}
else {
    console.log("Você perdeu")
}

