// Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade,
//  utilize os conhecimentos da aula para melhorar o código.

// Exemplo Entrada:
// { name: ‘Juca’, idade: 28 }

// Exemplo Saída:
// Maior de idade

const person = { name: 'Juca', age: 28 }
const checkIfIsGreater = ({ age }) =>
  age >= 18 ? 'é maior de idade' : 'é menor de idade'

console.log(checkIfIsGreater(person))
