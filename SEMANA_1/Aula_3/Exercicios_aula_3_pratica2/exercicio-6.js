// 06 - Escreva um programa que receba como entrada três números que serão
// armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
// Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
// Após ter mostrado faça trocas em que ao final valueTwo assuma o valor de
// valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valor
// de valueTwo. Mostre ao final os valores atualizados.

let valueOne = 1;
let valueTwo = 2;
let valueThree = 3;

function showValues(showInorder) {
  if ((showInorder = true))
    return valueOne + ", " + valueTwo + ", " + valueThree + ".";
}
// Resultado tem que dar 5, 12, 10
console.log(showValues());

function replaceValues(replace) {
  if ((replace = true))
    return (
      valueOne +
      valueTwo -
      valueOne +
      ", " +
      (valueTwo + valueThree - valueTwo) +
      ", " +
      (valueThree + valueOne - valueThree) +
      "."
    );
}

console.log(replaceValues());
