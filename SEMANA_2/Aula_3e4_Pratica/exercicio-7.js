// 7 - Dado um array de números, mostre quantos valores são pares, quantos são
// ímpares, quantos são positivos e quantos são negativos.
// Exemplo de Entrada:
// [-5,0,-3,-4,12]
// Exemplo de Saída:
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)

// let imparNumbers = "";
//   let positiveNumbers = "";
//   let negativeNumbers = "";

myArray = [-5, 0, -3, -4, 12]

let result = 0
let countPositive = 0
const positiveNumbers = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= result) {
      countPositive += 1
      // countPositive++
      // countPositive = countPositive + 1
    }
  }
  console.log(countPositive + ' valor(es) positivo(s)')
}

positiveNumbers(myArray)

let countNegative = 0
const negativeNumbers = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] < result) {
      countNegative += 1
      // countPositive++
      // countPositive = countPositive + 1
    }
  }
  console.log(countNegative + ' valor(es) negativo(s)')
}

negativeNumbers(myArray)

let countPar = 0
const parNumbers = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === result) {
      countPar += 1
    }
  }
  console.log(countPar + ' valor(es) par(es)')
}

parNumbers(myArray)

let countImpar = 0
const imparNumbers = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== result) {
      countImpar += 1
    }
  }
  console.log(countImpar + ' valor(es) ímpar(es)')
}

imparNumbers(myArray)
