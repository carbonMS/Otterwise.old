// Faça uma função que recebe um valor inteiro e verifica se o valor é par.
// A função deve retornar um valor booleano.

function evenNumber(num) {
  return num % 2 === 0;
}

console.log(evenNumber(3));

function evenNumber2(num) {
  if (num % 2 === 0) return true;
  if (num % 2 !== 0) return false;
}

console.log(evenNumber2(3));
