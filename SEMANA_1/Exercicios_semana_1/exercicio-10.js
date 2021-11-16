// 10 - Crie uma função chamada calculate que possui três parâmetros. O primeiro
// é uma string e os outros dois, números. A string será uma das seguintes opções:
// "soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
// resultado da operação (definida pela string) entre os dois números.
// Exemplo de Entrada:
// "soma"
// 3
// 5
// -----------------
// "divide"
// 21
// 7
// Exemplo de Saída:
// 8
// -----------------
let operation = "dividir";
let first = 3;
let second = 5;

function calculate(operation, firstNumber, secondNumber) {
  if (operation === "soma") return firstNumber + secondNumber;
  else if (operation === "subtrair") return firstNumber - secondNumber;
  else if (operation === "dividir") {
    return firstNumber / secondNumber;
  } else if (operation === "multiplicar") {
    return firstNumber * secondNumber;
  }
}

console.log(calculate(operation, 10, 3));
