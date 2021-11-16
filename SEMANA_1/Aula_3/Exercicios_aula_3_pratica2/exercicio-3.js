// 03 - Escreva um programa que receba como entrada dois valores. Após, o
// programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
// indicando se os valores recebidos como entrada são múltiplos entre si.

function showMultiply(valueOne, valueTwo) {
  if (valueOne % valueTwo === 0) return "São multíplos";
  else if (valueTwo % valueOne === 0) return "São multíplos";
  else return "Não são multíplos";
}

console.log(showMultiply(4, 3));
