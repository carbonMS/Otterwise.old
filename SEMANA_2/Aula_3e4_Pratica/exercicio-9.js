// 9 - Dado um array de números como entrada, faça um programa que
// multiplique todos os valores por 10.
// Exemplo de Entrada:
// [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
// Exemplo de Saída:
// [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]

myArray = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let result = 0

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index] * 10

  if (index === myArray.length - 1) {
    result = result + element + '.'
  } else {
    result = result + element + ', '
  }
}

console.log(result)
