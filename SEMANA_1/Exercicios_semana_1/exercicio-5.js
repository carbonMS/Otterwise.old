// 05 - Tendo como informações um nome e uma idade, faça um programa que
// imprima no console se a pessoa é maior ou menor de idade.
// Os valores de entrada serão:
// Nome;
// Idade.
// Exemplo de Entrada:
// Valter
// 23
// -----------------
// Juliana
// 12
// Exemplo de Saída:
// Valter é maior de idade.
// -----------------
// Juliana é menor de idade.

let firstName = "Valter";
let age = 23;

function showStatus(minorOrnot) {
  if (minorOrnot >= 18) {
    return firstName + " é maior de idade";
  } else if (minorOrnot <= 18) return firstName + " é menor de idade";
  {
  }
}

console.log(showStatus(17));
