// 6 - Dado um array de números, faça um programa que imprima na tela somente
// os números positivos.
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
// -----------------
// [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]

myArray = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  if (myArray[index] > 0) console.log(myArray[index]);
}
